export const isAuth = () => {
  if (localStorage.getItem("stram_prisma_access_token")) {
    return true;
  }
  return false;
};
