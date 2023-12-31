export type TAnimeCollection = {
  id?: number;
  anime_mal_id: string;
  anime_image_url?: string | null;
  anime_title?: string | null;
  user_email: string;
};

export interface RequestCollection<T> {
  json(): T | PromiseLike<T>;
}
