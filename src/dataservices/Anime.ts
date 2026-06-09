import { AnimeResponse, Anime } from "@/types/anime.type";
import { API_BASE_URL } from "@/utils/configuration";

export const getAnime = async (
  params: Record<string, string | number | boolean | undefined>,
): Promise<Anime[]> => {
  const queryParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      queryParams.append(key, String(value));
    }
  });

  const response = await fetch(
    `${API_BASE_URL}/anime?${queryParams.toString()}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  return data.data ?? [];
};

export const getTopAnime = async (
  params: Record<string, string | number | boolean | undefined>,
): Promise<Anime[]> => {
  try {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        queryParams.append(key, String(value));
      }
    });
    const response = await fetch(
      `${API_BASE_URL}/top/anime?${queryParams.toString()}`,
    );

    if (!response.ok) {
      const errorText = await response.json();

      throw new Error(
        errorText.error || `HTTP error! status: ${response.status}`,
      );
    }

    const data = await response.json();

    return data.data ?? [];
  } catch (error) {
    console.error(error);

    throw error instanceof Error ? error : new Error("Error when get Data");
  }
};

export const getAnimeById = async ({ id }: { id: number }): Promise<Anime> => {
  try {
    const response = await fetch(`${API_BASE_URL}/anime/${id}`);

    if (!response.ok) {
      const errorText = await response.json();

      throw new Error(
        errorText.error || `HTTP error! status: ${response.status}`,
      );
    }

    const data: AnimeResponse = await response.json();

    return data.data;
  } catch (error) {
    console.error(error);

    throw error instanceof Error ? error : new Error("Error when get Data");
  }
};
