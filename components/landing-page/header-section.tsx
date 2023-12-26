import Link from "next/link";

export const HeaderSection = ({
  highlight,
  title,
  href,
}: {
  highlight: string;
  title: string;
  href: string;
}) => {
  return (
    <div className="flex justify-between pr-5 items-center">
      <h1 className="text-xl md:text-2xl font-bold">
        <span className="text-red-600">{highlight}</span> {title}
      </h1>
      <Link
        href={href}
        className="text-xs md:text-sm transition-all text-neutral-500 dark:text-neutral-400  hover:text-red-700 dark:hover:text-red-700 hover:underline underline-offset-2"
      >
        View all
      </Link>
    </div>
  );
};
