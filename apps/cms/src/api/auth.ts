/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginUserDTO } from "@repo/zod-schemas/shared/auth-schema";
import api from "../lib/axios";
import { AxiosError, isAxiosError } from "axios";
import {
  ErrorResponseType,
  LoginResponseType,
  LogoutResponseType,
  MeResponseType,
  RefreshTokenResponseType,
  RegisterResponseType,
} from "@repo/types/auth";
import { RegisterUserDTO } from "@repo/zod-schemas/shared/auth-schema";
import { useAuth } from "../store/auth";
import { redirect } from "@tanstack/react-router";

// Request queue management
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: any) => void;
  reject: (error: any) => void;
}> = [];

const processQueue = (
  error: AxiosError | null,
  token: string | null = null
) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });

  failedQueue = [];
};

// Enhanced error response validation
const isValidErrorResponse = (data: any): data is ErrorResponseType => {
  return (
    data &&
    typeof data === "object" &&
    data.data &&
    typeof data.data.message === "string"
  );
};

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    // Handle network errors and missing config
    if (!error.response || !originalRequest) {
      return Promise.reject(error);
    }

    // Validate error response structure
    if (!isValidErrorResponse(error.response.data)) {
      console.warn("Unexpected error response format:", error.response.data);
      return Promise.reject(error);
    }

    const errorData = error.response.data as ErrorResponseType;
    const errorMessage = errorData.data.message;

    // Check if this is an auth error that needs token refresh
    const isAuthError =
      error.response.status === 401 &&
      errorMessage.includes("You're not logged in");

    if (isAuthError && !originalRequest._retry) {
      // Prevent infinite loops
      if (originalRequest.url.includes("/auth/refresh")) {
        // if refresh endpoint itself fails, clear auth and redirect
        const { clearAuthUser } = useAuth();
        clearAuthUser();
        redirect({ to: "/login" });
        return Promise.reject(error);
      }

      originalRequest._retry = true;
      if (isRefreshing) {
        // if already refreshing, queue this request
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return api(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      isRefreshing = true;

      try {
        await refreshTokenFn();
        // console.log("hit");

        // Process queued request
        processQueue(null, "success");

        // Retry original request
        return api(originalRequest);
      } catch (refreshError) {
        // Process queued requests with error
        processQueue(refreshError as AxiosError, null);

        // Clear auth state and redirect to login
        const { clearAuthUser } = useAuth();
        clearAuthUser();

        // Handle specific refresh errors
        if (isAxiosError(refreshError)) {
          const refreshErrorData = refreshError.response?.data;
          if (isValidErrorResponse(refreshErrorData)) {
            const refreshErrorMessage = refreshErrorData.data.message;
            if (refreshErrorMessage === "Could not refresh access token") {
              redirect({ to: "/login" });
              return Promise.reject(
                new Error("Session expired. Please login again.")
              );
            }
          }
        }

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export const meFn = async () => {
  try {
    const response = await api.get<MeResponseType>("/auth/me");
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};

export const loginFn = async (payload: LoginUserDTO) => {
  try {
    const response = await api.post<LoginResponseType>("/auth/login", payload);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};

export const registerFn = async (payload: RegisterUserDTO) => {
  try {
    const response = await api.post<RegisterResponseType>(
      "/auth/register",
      payload
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data.data;
    }
    throw error;
  }
};

export const refreshTokenFn = async (): Promise<RefreshTokenResponseType> => {
  try {
    const response = await api.get<RefreshTokenResponseType>("/auth/refresh");

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      const errorData = error.response?.data;
      if (isValidErrorResponse(errorData)) {
        throw new Error(errorData.data.message);
      }
      throw new Error(error.message || "Failed to refresh token");
    }
    throw new Error("Network error during token refresh");
  }
};

export const logoutFn = async (): Promise<LogoutResponseType> => {
  try {
    const response = await api.post<LogoutResponseType>("/auth/logout");

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Failed to logout");
    }
    throw new Error("Network error during logout");
  }
};
