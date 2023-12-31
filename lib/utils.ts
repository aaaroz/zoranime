import { options } from "@/app/api/auth/[...nextauth]/options";
import { TUser } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { getServerSession } from "next-auth";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removePath(path: string[], pathToRemove: string): string[] {
  return path.filter((pathname) => pathname !== pathToRemove);
}

export const authUserSession = async (): Promise<TUser | undefined> => {
  try {
    const auth = await getServerSession(options);
    return auth?.user;
  } catch (error) {
    throw new Error("Failed to authenticate user");
  }
};
