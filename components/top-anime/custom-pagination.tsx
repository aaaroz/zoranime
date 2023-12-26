import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CustomPaginationProps {
  currentPage: number;
  lastPage: number | undefined;
  pageNumberLimit: number;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  lastPage,
  pageNumberLimit,
}) => {
  const pages = [];
  if (lastPage) {
    for (let i = 1; i <= lastPage; i++) {
      pages.push(i);
    }
  }

  const totalPages = pages.length;

  const calculateLimits = () => {
    const halfLimit = Math.floor(pageNumberLimit / 2);

    if (currentPage > halfLimit) {
      const maxPageNumberLimit = Math.min(currentPage + halfLimit, totalPages);
      const minPageNumberLimit = Math.max(
        maxPageNumberLimit - pageNumberLimit + 1,
        1
      );

      return { minPageNumberLimit, maxPageNumberLimit };
    } else {
      return {
        minPageNumberLimit: 1,
        maxPageNumberLimit: Math.min(pageNumberLimit, totalPages),
      };
    }
  };

  const { minPageNumberLimit, maxPageNumberLimit } = calculateLimits();

  const renderPageNumbers = pages.map((number, index) => {
    if (number >= minPageNumberLimit && number <= maxPageNumberLimit) {
      return (
        <PaginationItem key={index}>
          <PaginationLink
            href={`?page=${number}`}
            isActive={currentPage === number}
            className={
              currentPage === number
                ? "pointer-events-none"
                : "pointer-events-auto hover:bg-neutral-200 dark:hover:bg-neutral-900"
            }
          >
            {number}
          </PaginationLink>
        </PaginationItem>
      );
    } else {
      return null;
    }
  });

  const pageIncrementBtn =
    maxPageNumberLimit < totalPages ? (
      <PaginationItem>
        <Link href={`?page=${currentPage + 5}`}>
          <PaginationEllipsis />
        </Link>
      </PaginationItem>
    ) : null;

  const pageDecrementBtn =
    minPageNumberLimit > 1 ? (
      <PaginationItem>
        <Link href={`?page=${currentPage - 5 <= 0 ? 1 : currentPage - 5}`}>
          <PaginationEllipsis />
        </Link>
      </PaginationItem>
    ) : null;

  return (
    <Pagination className="flex justify-center py-8">
      <PaginationContent>
        <PaginationPrevious
          href={`?page=${currentPage - 1}`}
          className={
            currentPage === 1
              ? "pointer-events-none"
              : "pointer-events-auto hover:bg-neutral-200 dark:hover:bg-neutral-900"
          }
        />
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <PaginationNext
          href={`?page=${currentPage + 1}`}
          className={
            currentPage === totalPages
              ? "pointer-events-none"
              : "pointer-events-auto hover:bg-neutral-200 dark:hover:bg-neutral-900"
          }
        />
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
