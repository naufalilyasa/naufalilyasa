export const auth: Auth = {
  status: "loggedOut",
  login: () => {
    auth.status = "loggedIn";
  },
  logout: () => {
    auth.status = "loggedOut";
  },
};

export type Auth = {
  login: () => void;
  logout: () => void;
  status: "loggedOut" | "loggedIn";
  
};
