import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
} from "react";

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

export type TInputProps = InputHTMLAttributes<HTMLInputElement> &
  PropsWithChildren;
