import { TRecommendedAnime } from "@/types";
import { unstable_noStore } from "next/cache";

export const getMangaFullById = async (id: number | string) => {
  unstable_noStore();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/manga/${id}/full`);
    const manga = await response.json();
    return manga;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Anime");
  }
};

export const getAnimeFullById = async (id: number | string) => {
  unstable_noStore();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}/full`);
    const anime = await response.json();
    return anime;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Anime");
  }
};

export const getAnimeResponse = async (resource: string, query?: string) => {
  unstable_noStore();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`);
    const anime = await response.json();
    return anime;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Anime");
  }
};

export const getRandomAnimeResponse = async (resource: string) => {
  unstable_noStore();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`, {
      next: { revalidate: 20 },
    });
    const anime = await response.json();
    return anime;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Anime");
  }
};

export const getNestedAnimeResponse = async (resource: string, objectProperty: string) => {
  unstable_noStore();
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`, {
      next: { revalidate: 1 },
    });
    const anime = await response.json();
    return anime.data?.flatMap((item: { [key: string]: unknown }) => item[objectProperty]);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch Anime");
  }
};

export const reproduce = (data: TRecommendedAnime[], gap: number) => {
  const first = ~~(Math.random() * (data?.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data?.slice(first, last),
  };

  return response;
};
