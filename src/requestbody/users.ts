import codeCrypto from "../type/dec";

type CrytoLoan = keyof typeof codeCrypto;

export interface RequestBodyUsers {
  codeTransaksi: string;
  name: string;
  email: string;
  password: string;
  noHP: string;
  waletAddress: string;
  cryptoLoan: CrytoLoan;
  fee: string;
  loan: string;
  buktiHash: string;
}
