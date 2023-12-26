import Link from "next/link";
import * as React from "react";

interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  path: string[];
  separator?: React.ReactNode;
}

const Separator = <p className="text-2xl">»</p>;
function Breadcrumb({ path, separator, ...props }: BreadcrumbProps) {
  return (
    <div className="flex items-center space-x-1 capitalize text-sm" {...props}>
      <Link href="/" className="hover:text-red-700">
        Home
      </Link>
      {separator || Separator}
      {path.map((item, index) => (
        <React.Fragment key={index}>
          {index !== path.length - 1 ? (
            <Link
              href={`/${path.slice(0, index + 1).join("/")}`}
              key={index}
              className="hover:text-red-700"
            >
              {item}
            </Link>
          ) : (
            <p key={index}>{item}</p>
          )}

          {index !== path.length - 1 ? <>{separator || Separator}</> : null}
        </React.Fragment>
      ))}
    </div>
  );
}

export { Breadcrumb };
