export interface IInput {
  placeholder: string;
  type: "text" | "email" | "password" | "number";
  value: string;
  callback: (e: string) => void;
  isSearch: boolean;
  errText: string;
}