export interface RequestBodyUsers {
  username: string;
  email: string;
  password: string;
}

export interface RequestBodyUsersEdit {
  walletAddress: string;
  buktiHash: string;
}
