import { LoginUserDTO } from "@repo/zod-schemas/src/auth-schema";
import api from "../lib/axios";
import { isAxiosError } from "axios";
import { LoginResponseType } from "@repo/types/auth";


export const loginFn = async (payload: LoginUserDTO) => {
  try {
    const response = await api.post<LoginResponseType>("/auth/login", payload);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
      // api.interceptors.response.use((res)=>res, async (error) => {
        
      // })
    }
  }
};
