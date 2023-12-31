import { removePath } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  path: string[];
  page?: string;
  separator?: React.ReactNode;
}

const Separator = <p className="text-2xl">»</p>;
function Breadcrumb({ path, page, separator, ...props }: BreadcrumbProps) {
  let arrayPath = path;
  if (path[0] === "users") {
    arrayPath = removePath(path, "users");
  }
  if (path[0] === "search") {
    arrayPath = removePath(path, "search");
  }

  return (
    <div className="flex items-center space-x-1 capitalize text-sm" {...props}>
      <Link href="/" className="hover:text-red-700">
        Home
      </Link>
      {separator || Separator}

      {arrayPath.map((item, index) => (
        <React.Fragment key={index}>
          {index !== arrayPath.length - 1 ? (
            <Link
              href={
                item !== "dashboard"
                  ? `/${path.slice(0, index + 1).join("/")}`
                  : `/${path.slice(0, index + 2).join("/")}`
              }
              key={index}
              className="hover:text-red-700"
            >
              {item}
            </Link>
          ) : page ? (
            <p>{page}</p>
          ) : (
            <p key={index}>{item}</p>
          )}

          {index !== arrayPath.length - 1 ? (
            <>{separator || Separator}</>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export { Breadcrumb };
