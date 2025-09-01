import { useQuery } from '@tanstack/react-query';
import { parseAsInteger, parseAsString, useQueryStates } from 'nuqs';
import { fetchCharacterById, fetchCharacters } from '@/lib/api';
import { CharacterFilters } from '@/types/api';
import { useCharacterStore } from '@/store/character-store';
import { useEffect, useMemo } from 'react';

export const useCharacters = () => {
  const [queryStates] = useQueryStates({
    status: parseAsString.withDefault('all').withOptions({ shallow: false }),
    gender: parseAsString.withDefault('all').withOptions({ shallow: false }),
    page: parseAsInteger.withDefault(1).withOptions({ shallow: false }),
  });

  const {
    setFilters,
    setTotalPages,
    setCurrentPage,
    setCharacters,
    setLoading,
    setError,
    setTotalResults,
  } = useCharacterStore();

  const filters: CharacterFilters = useMemo(
    () => ({
      status:
        queryStates.status && queryStates.status !== 'all'
          ? (queryStates.status as 'Alive' | 'Dead' | 'unknown')
          : undefined,
      gender:
        queryStates.gender && queryStates.gender !== 'all'
          ? (queryStates.gender as 'Female' | 'Male' | 'Genderless' | 'unknown')
          : undefined,
      page: queryStates.page || 1,
    }),
    [queryStates.status, queryStates.gender, queryStates.page]
  );

  const query = useQuery({
    queryKey: ['characters', filters],
    queryFn: () => fetchCharacters(filters),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  useEffect(() => {
    if (query.data) {
      setCharacters(query.data.results);
      setTotalPages(query.data.info.pages);
      setCurrentPage(filters.page || 1);
      setTotalResults(query.data.info.count);
      setFilters(filters);
      setLoading(false);
      setError(null);
    }
  }, [
    query.data,
    filters,
    setCharacters,
    setTotalPages,
    setCurrentPage,
    setTotalResults,
    setFilters,
    setLoading,
    setError,
  ]);

  useEffect(() => {
    setLoading(query.isLoading);
    if (query.error) {
      setError(query.error.message);
    }
  }, [query.isLoading, query.error, setLoading, setError]);

  return query;
};

export const useCharacter = (id: number) => {
  return useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacterById(id),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
    gcTime: 20 * 60 * 1000,
  });
};
