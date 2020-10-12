export type AccountType = {[key: string]: any};

export type JournalType = {[key: string]: any};

export type UserInputType = {
  startAccount: number | null;
  endAccount: number | null;
  startPeriod: Date | null;
  endPeriod: Date | null;
  format: string;
};

export interface RootState {
  accounts: AccountType[];
  journal: JournalType[];
  userInput: UserInputType;
}
