export const SET_ACCOUNTS = 'SET_ACCOUNTS';

export const setAccountsActionCreator = (accounts: Array<{[key: string]: any}>) => ({
  type: SET_ACCOUNTS,
  payload: accounts,
});

export const SET_JOURNAL_ENTRIES = 'SET_JOURNAL_ENTRIES';

export const setJournalEntriesActionCreator = (journalEntries: Array<{[key: string]: any}>) => ({
  type: SET_JOURNAL_ENTRIES,
  payload: journalEntries,
});

export const SET_USER_INPUT = 'SET_USER_INPUT';

export const setUserInputActionCreator = (userInput: {
  startAccount: number;
  endAccount: number;
  startPeriod: Date;
  endPeriod: Date;
  format: string;
}) => ({
  type: SET_USER_INPUT,
  payload: userInput,
});
