export interface RequestBodyUsers {
  username: string;
  email: string;
  password: string;
  waletAddressPendaftar: string;
  noHP: string;
}

export interface RequestBodyUsersEdit {
  nominal: string;
  cryptoLoan: string;
  walletAddressTujuan: string;
  buktiHash: string;
}
