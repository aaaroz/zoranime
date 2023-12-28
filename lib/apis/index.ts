import { TRecommendedAnime } from "@/types";

export const getMangaFullById = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/manga/${id}/full`
  );
  const manga = await response.json();
  return manga;
};

export const getAnimeFullById = async (id: number) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${id}/full`
  );
  const anime = await response.json();
  return anime;
};

export const getAnimeResponse = async (resource: string, query?: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const anime = await response.json();
  return anime;
};

export const getRandomAnimeResponse = async (resource: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}`,
    { next: { revalidate: 50 } }
  );
  const anime = await response.json();
  return anime;
};

export const getNestedAnimeResponse = async (
  resource: string,
  objectProperty: string
) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap(
    (item: { [key: string]: unknown }) => item[objectProperty]
  );
};

export const reproduce = (data: TRecommendedAnime[], gap: number) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};
