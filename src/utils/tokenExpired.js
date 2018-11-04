export const tokenExpired = () => {
  const accessToken = localStorage.getItem("access_token");
  const expiresIn = localStorage.getItem("expires_in");
  const issuedAt = localStorage.getItem("issued_at");

  if (!accessToken || !expiresIn || !issuedAt) {
    removeToken();
    return true;
  } else if (Date.now() - issuedAt > expiresIn * 1000) {
    removeToken();
    return true;
  } else {
    return false;
  }
};

export const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expires_in");
  localStorage.removeItem("issued_at");
  localStorage.removeItem("artists");
  localStorage.removeItem("tracks");
};
