import {
  ButtonHTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
  PropsWithRef,
} from "react";

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  PropsWithChildren;

export type TInputProps = InputHTMLAttributes<HTMLInputElement> &
  PropsWithChildren;
