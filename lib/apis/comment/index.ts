interface MangaComment {
  comment: string;
  rating: number;
  id?: number | undefined;
  user_email?: string | undefined;
  username?: string | undefined;
  user_image?: string | null | undefined;
  createdAt?: Date | null | undefined;
  mal_id?: string | undefined;
  title?: string | undefined;
}

interface AnimeComment {
  comment: string;
  rating: number;
  user_image?: string | null | undefined;
  username?: string | undefined;
  user_email?: string | undefined;
  createdAt?: Date | null | undefined;
  id?: number | undefined;
  anime_mal_id?: string | undefined;
  anime_title?: string | undefined;
}

const APIComment = {
  addComment: async (data: AnimeComment) => {
    try {
      const response = await fetch("/api/v1/comment", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw new Error("Failed to add comment");
    }
  },
  addMangaComment: async (data: MangaComment) => {
    try {
      const response = await fetch("/api/v1/comment/manga", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw new Error("Failed to add comment");
    }
  },
};

export default APIComment;
