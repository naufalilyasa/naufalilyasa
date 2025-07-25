import { LoginUserDTO } from "@repo/zod-schemas/shared/auth-schema";
import api from "../lib/axios";
import {  isAxiosError } from "axios";
import {
  ErrorResponseType,
  LoginResponseType,
  MeResponseType,
  RefreshTokenResponseType,
  RegisterResponseType,
} from "@repo/types/auth";
import { RegisterUserDTO } from "@repo/zod-schemas/shared/auth-schema";

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    let errMessage = "";
    if (!error.response || !originalRequest) {
      return;
    }
    errMessage = (error.response.data as ErrorResponseType).data.message as string;
    console.log(errMessage.includes("You're not logged in"));
    console.log(error.response.status === 401);
    console.log(!originalRequest._retry);
    
    try {
      if (
        errMessage.includes("You're not logged in") &&
        error.response.status === 401 &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true;
        await refreshTokenFn();

        return api(originalRequest);
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.data.message === "Could not refresh access token") {
          return Promise.reject(new Error("You're not logged in"));
        }
        return Promise.reject(
          new Error(error.response?.data.message || "Server internal error")
        );
      }
      return Promise.reject(new Error("Server internal error."));
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
      throw error;
    }
    throw error;
  }
};

export const refreshTokenFn = async () => {
  try {
    const response = await api.get<RefreshTokenResponseType>("/auth/refresh");
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    }
    throw error;
  }
};
