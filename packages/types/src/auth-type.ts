export type LoginResponseType = {
  status: string;
  statusCode: number;
  message: string;
  data: {
    id: string;
    username: string;
    name: string;
  };
};

export type RegisterResponseType = {
  status: string;
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
    username: string;
  };
};

export type MeResponseType = {
  status: string;
  statusCode: number;
  data: {
    id: string;
    name: string;
    username: string;
  };
};

export type RefreshTokenResponseType = {
  message: string;
  status: string;
  statusCode: number;
};

export type ErrorResponseType = {
  data: { message: string };
  status: string;
  statusCode: number;
};

export type LogoutResponseType = {
  message: string;
  status: string;
  statusCode: number;
};
