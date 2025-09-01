'use client';

import React from 'react';
import { CharacterFilters } from './character-filters';
import { CharacterGrid } from './character-grid';
import { Pagination } from './pagination';
import { useCharacters } from '@/hooks/use-characters';
import { parseAsInteger, useQueryStates } from 'nuqs';
import { useCharacterStore } from '@/store/character-store';

export const CharacterListContent: React.FC = () => {
  const { isLoading, error } = useCharacters();
  const [, setPage] = useQueryStates({
    page: parseAsInteger.withDefault(1).withOptions({ shallow: false }),
  });

  const { characters, totalPages, currentPage, totalResults } =
    useCharacterStore();

  const handlePageChange = (newPage: number) => {
    setPage({ page: newPage });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <CharacterFilters />
        </div>

        <div className="mb-8">
          <CharacterGrid
            characters={characters}
            loading={isLoading}
            error={error?.message || null}
          />
        </div>

        {totalPages > 1 && (
          <div className="mb-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              totalResults={totalResults}
              onPageChange={handlePageChange}
            />
          </div>
        )}

        {characters.length > 0 && (
          <div className="text-center text-sm text-gray-500">
            Showing {characters.length} of {totalResults} characters
          </div>
        )}
      </div>
    </div>
  );
};
