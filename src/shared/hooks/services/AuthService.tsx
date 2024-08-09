import { AxiosResponse } from "axios";

import { API, setAccess, storeAccess } from "@/shared";

export const AuthService = () => {
  const signin = async (code: string) => {
    const {
      data: {
        result: { access_token, newUser },
      },
    } = (await API.get("/oauth2/login", {
      params: { code: code },
    })) as AxiosResponse<User.SignInResDto>;

    setAccess(access_token);
    storeAccess(access_token);

    return newUser;
  };

  return { signin };
};
