import create from "zustand";

export const useLoginStore = create((set) => {
  return {
    loggedIn: false,
    username: "",
    access_token: "",
    setLoggedIn: (loggedIn, username, token) => set((state) => ({ ...state, loggedIn, username, token })),
    /**setLoggedIn(true, response.data.username, response.data.access_token); */
  };
});
