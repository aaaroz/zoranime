import { TAnimeCollection } from "@/types";

const APICollection = {
  addCollection: async (data: TAnimeCollection) => {
    try {
      const response = await fetch("/api/v1/collection", {
        method: "POST",
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw new Error("Failed to add Collection");
    }
  },
};

export default APICollection;
