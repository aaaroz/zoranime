import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const MyCollections: FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Link href="#">
          <Card className="border hover-image hover:text-red-600 dark:hover:text-red-600">
            <CardContent className="relative p-1">
              <Image
                src="/images/hero-section.png"
                width={450}
                height={350}
                alt="logo"
                className="w-full h-auto object-cover rounded"
              />
              <CardHeader className="absolute w-full rounded bottom-0 left-0 mr-1 p-2 py-3 bg-gradient-to-t from-neutral-50 via-neutral-100 dark:from-neutral-950 dark:via-neutral-900">
                <h3 className="text-xl font-bold">Tokyo Ghoul</h3>
              </CardHeader>
            </CardContent>
          </Card>
        </Link>
        <Link href="#">
          <Card className="border hover-image hover:text-red-600 dark:hover:text-red-600">
            <CardContent className="relative p-1">
              <Image
                src="/images/hero-section.png"
                width={450}
                height={350}
                alt="logo"
                className="w-full h-auto object-cover rounded"
              />
              <CardHeader className="absolute w-full rounded bottom-0 left-0 mr-1 p-2 py-3 bg-gradient-to-t from-neutral-50 via-neutral-100 dark:from-neutral-950 dark:via-neutral-900">
                <h3 className="text-xl font-bold">Tokyo Ghoul</h3>
              </CardHeader>
            </CardContent>
          </Card>
        </Link>{" "}
        <Link href="#">
          <Card className="border hover-image hover:text-red-600 dark:hover:text-red-600">
            <CardContent className="relative p-1">
              <Image
                src="/images/hero-section.png"
                width={450}
                height={350}
                alt="logo"
                className="w-full h-auto object-cover rounded"
              />
              <CardHeader className="absolute w-full rounded bottom-0 left-0 mr-1 p-2 py-3 bg-gradient-to-t from-neutral-50 via-neutral-100 dark:from-neutral-950 dark:via-neutral-900">
                <h3 className="text-xl font-bold">Tokyo Ghoul</h3>
              </CardHeader>
            </CardContent>
          </Card>
        </Link>{" "}
        <Link href="#">
          <Card className="border hover-image hover:text-red-600 dark:hover:text-red-600">
            <CardContent className="relative p-1">
              <Image
                src="/images/hero-section.png"
                width={450}
                height={350}
                alt="logo"
                className="w-full h-auto object-cover rounded"
              />
              <CardHeader className="absolute w-full rounded bottom-0 left-0 mr-1 p-2 py-3 bg-gradient-to-t from-neutral-50 via-neutral-100 dark:from-neutral-950 dark:via-neutral-900">
                <h3 className="text-xl font-bold">Tokyo Ghoul</h3>
              </CardHeader>
            </CardContent>
          </Card>
        </Link>{" "}
        <Link href="#">
          <Card className="border hover-image hover:text-red-600 dark:hover:text-red-600">
            <CardContent className="relative p-1">
              <Image
                src="/images/hero-section.png"
                width={450}
                height={350}
                alt="logo"
                className="w-full h-auto object-cover rounded"
              />
              <CardHeader className="absolute w-full rounded bottom-0 left-0 mr-1 p-2 py-3 bg-gradient-to-t from-neutral-50 via-neutral-100 dark:from-neutral-950 dark:via-neutral-900">
                <h3 className="text-xl font-bold">Tokyo Ghoul</h3>
              </CardHeader>
            </CardContent>
          </Card>
        </Link>{" "}
        <Link href="#">
          <Card className="border hover-image hover:text-red-600 dark:hover:text-red-600">
            <CardContent className="relative p-1">
              <Image
                src="/images/hero-section.png"
                width={450}
                height={350}
                alt="logo"
                className="w-full h-auto object-cover rounded"
              />
              <CardHeader className="absolute w-full rounded bottom-0 left-0 mr-1 p-2 py-3 bg-gradient-to-t from-neutral-50 via-neutral-100 dark:from-neutral-950 dark:via-neutral-900">
                <h3 className="text-xl font-bold">Tokyo Ghoul</h3>
              </CardHeader>
            </CardContent>
          </Card>
        </Link>{" "}
        <Link href="#">
          <Card className="border hover-image hover:text-red-600 dark:hover:text-red-600">
            <CardContent className="relative p-1">
              <Image
                src="/images/hero-section.png"
                width={450}
                height={350}
                alt="logo"
                className="w-full h-auto object-cover rounded"
              />
              <CardHeader className="absolute w-full rounded bottom-0 left-0 mr-1 p-2 py-3 bg-gradient-to-t from-neutral-50 via-neutral-100 dark:from-neutral-950 dark:via-neutral-900">
                <h3 className="text-xl font-bold">Tokyo Ghoul</h3>
              </CardHeader>
            </CardContent>
          </Card>
        </Link>{" "}
        <Link href="#">
          <Card className="border hover-image hover:text-red-600 dark:hover:text-red-600">
            <CardContent className="relative p-1">
              <Image
                src="/images/hero-section.png"
                width={450}
                height={350}
                alt="logo"
                className="w-full h-auto object-cover rounded"
              />
              <CardHeader className="absolute w-full rounded bottom-0 left-0 mr-1 p-2 py-3 bg-gradient-to-t from-neutral-50 via-neutral-100 dark:from-neutral-950 dark:via-neutral-900">
                <h3 className="text-xl font-bold">Tokyo Ghoul</h3>
              </CardHeader>
            </CardContent>
          </Card>
        </Link>
      </div>
    </>
  );
};
