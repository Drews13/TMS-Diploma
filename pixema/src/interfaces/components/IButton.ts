import { ReactNode } from "react";

export interface IButton {
  isGrey: boolean;
  children: ReactNode;
  callback?: () => void;
}