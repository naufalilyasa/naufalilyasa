import { create } from "zustand";
import { LoginResponseDTO } from "@repo/zod-schemas/shared/auth-schema";

type AuthUserStoreType = {
  authUser: LoginResponseDTO;
  setAuthUser: (user: LoginResponseDTO) => void;
  isAuthenticate: boolean;
};

export const useAuth = create<AuthUserStoreType>((set) => ({
  authUser: {
    id: "",
    name: "",
    username: "",
  } as LoginResponseDTO,
  setAuthUser: (user) => {
    set({ authUser: user, isAuthenticate: true });
  },
  isAuthenticate: false,
}));
