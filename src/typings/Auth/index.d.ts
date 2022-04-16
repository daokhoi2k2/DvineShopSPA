export interface ILogin {
  account: string;
  password: string;
}

export interface IUserInfo {
  _id: string;
  username: string;
  email: string;
  balance: number;
  accumulated: number;
  role: number;
  createdAt: string;
  updatedAt: string;
  membership: number;
}

