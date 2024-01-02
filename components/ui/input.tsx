import * as React from "react";

import { TInputProps } from "@/types";

export const Input = React.forwardRef<HTMLInputElement, TInputProps>(
  ({ children, ...props }, ref) => {
    return (
      <>
        <div className="relative rounded-md border focus-within:border text-neutral-400 border-neutral-400 focus-within:text-neutral-600 focus-within:border-neutral-600 dark:text-white dark:border-neutral-500 dark:focus-within:border-neutral-50 dark:focus-within:text-neutral-50">
          {children && (
            <div className="absolute inset-y-0 start-0 flex items-center ps-2 font-thin text-xl">
              {children}
            </div>
          )}
          <input
            className={`w-full rounded-md p-2 pe-3 font-normal text-sm text-black focus:border-0 focus:outline-none focus:ring-0 dark:text-white ${
              children ? "ps-9" : "ps-3"
            }`}
            ref={ref}
            {...props}
          />
        </div>
      </>
    );
  }
);
Input.displayName = "Input";
