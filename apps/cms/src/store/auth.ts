import { create } from "zustand";
import { type LoginResponseType } from "@repo/types/auth";

type AuthUserStoreType = {
  authUser: LoginResponseType;
  setAuthUser: (user: LoginResponseType) => void;
  isAuthenticate: boolean;
};

export const useAuth = create<AuthUserStoreType>((set) => ({
  authUser: {
    id: "",
    name: "",
    username: "",
  } as LoginResponseType,
  setAuthUser: (user) => {
    set({ authUser: user, isAuthenticate: true });
  },
  isAuthenticate: false,
}));
