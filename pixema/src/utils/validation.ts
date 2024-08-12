import { EMAIL_REGEX } from "src/constants/RegExprs";

export const isNameValid = (name: string) => name.length > 4;
export const isEmailValid = (email: string) => email.search(EMAIL_REGEX) !== -1;
export const isPasswordValid = (password: string) => password.length > 4;
export const strsMatch = (str1: string, str2: string) => str1 === str2;