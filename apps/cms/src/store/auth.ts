import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LoginResponseDTO } from "@repo/zod-schemas/shared/auth-schema";

type AuthUserStoreType = {
  authUser: LoginResponseDTO | null;
  setAuthUser: (user: LoginResponseDTO) => void;
  clearAuthUser: () => void;
  isAuthenticate: boolean;
};

export const useAuth = create<AuthUserStoreType>()(
  persist(
    (set) => ({
      authUser: null,
      isAuthenticate: false,
      setAuthUser: (user) => {
        set({ authUser: user, isAuthenticate: true });
      },
      clearAuthUser: () => {
        set({ authUser: undefined, isAuthenticate: false });
      },
    }),
    {
      name: "auth-user-storage",
      // Only persist essential data
      partialize: (state) => ({
        authUser: state.authUser,
        isAuthenticate: state.isAuthenticate,
      }),
    }
  )
);
