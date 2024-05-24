export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.user.name;
export const selectToken = (state) => state.auth.token;
export const selectError = (state) => state.auth.error;
export const selectRefreshing = (state) => state.auth.isRefreshing;