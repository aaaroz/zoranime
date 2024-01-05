export type TAnimeComment = {
  id?: number;
  anime_mal_id: string;
  anime_title: string;
  user_email: string;
  username: string;
  user_image?: string | null;
  comment: string;
  rating: number;
  createdAt?: Date | null;
};

export type TMangaComment = {
  id?: number;
  mal_id: string;
  title: string;
  user_email: string;
  username: string;
  user_image?: string | null;
  comment: string;
  rating: number;
  createdAt?: Date | null;
};
