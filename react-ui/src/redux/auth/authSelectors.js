export const isAuthentificated = (state) => (state.auth.token ? true : false);
export const isUser = (state) => (state.auth.user ? true : false);
export const getUser = (state) => state.auth.user;
