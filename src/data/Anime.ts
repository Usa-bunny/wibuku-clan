import { AnimeResponse } from "@/types/anime.type";
import { API_BASE_URL } from "@/utils/configuration";

export const getRandomAnime = async (): Promise<AnimeResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/random/anime`);

    if (!response.ok) {
      const errorText = await response.json();

      throw new Error(
        errorText.error || `HTTP error! status: ${response.status}`,
      );
    }

    return await response.json();
  } catch (error) {
    console.error(error);

    throw error instanceof Error ? error : new Error("Error when get Data");
  }
};
