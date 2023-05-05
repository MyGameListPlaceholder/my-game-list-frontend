import Constants from "../helpers/Constants";
import fetchPlus from "../helpers/fetchPlus";

const useRefreshToken = () => {
  const refresh = async () => {
    const localStorageUser = localStorage.getItem("user");
    let user = null;
    if (localStorageUser) {
      user = JSON.parse(localStorageUser);
      const responseData = await fetchPlus(`${Constants.BASE_URL}/token/refresh/`, {
        body: JSON.stringify({
          token: user.token,
          refreshToken: user.refreshToken,
        }),
      });
      user.token = responseData.access;
      localStorage.setItem("user", JSON.stringify(user));
    }
    return user?.token;
  };

  return refresh;
};

export default useRefreshToken;