export type TAnimeCollection = {
  id?: number;
  anime_mal_id: string;
  anime_image_url?: string | null;
  anime_title?: string | null;
  user_email: string;
};

export type TMangaCollection = {
  id?: number;
  mal_id: string;
  image_url?: string | null;
  title?: string | null;
  user_email: string;
};
