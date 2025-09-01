import { ApiResponse, Character, CharacterFilters } from '@/types/api';

const API_BASE_URL = '/api';

export const fetchCharacters = async (
  filters: CharacterFilters = {}
): Promise<ApiResponse<Character>> => {
  const params = new URLSearchParams();

  if (filters.status) {
    params.append('status', filters.status);
  }

  if (filters.gender) {
    params.append('gender', filters.gender);
  }

  if (filters.page) {
    params.append('page', filters.page.toString());
  }

  const url = `${API_BASE_URL}/characters?${params.toString()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiResponse<Character> = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch characters: ${error.message}`);
    }
    throw new Error('Failed to fetch characters: Unknown error');
  }
};

export const fetchCharacterById = async (id: number): Promise<Character> => {
  try {
    const response = await fetch(`${API_BASE_URL}/character/${id}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const character: Character = await response.json();
    return character;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch character: ${error.message}`);
    }
    throw new Error('Failed to fetch character: Unknown error');
  }
};
