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
  nominal: string;
  buktiHash: string;
}
