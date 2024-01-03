import { options } from "@/app/api/auth/[...nextauth]/options";
import { TUser } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { getServerSession } from "next-auth";
import { unstable_noStore } from "next/cache";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function removePath(path: string[], pathToRemove: string): string[] {
  return path.filter((pathname) => pathname !== pathToRemove);
}

export const authUserSession = async (): Promise<TUser | null> => {
  unstable_noStore();
  try {
    const auth = await getServerSession(options);
    return auth?.user ?? null;
  } catch (error) {
    throw new Error("Failed to authenticate user");
  }
};
