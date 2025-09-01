import React, { Suspense } from 'react';
import { CharacterListContent } from '@/components/character-list-content';

const CharacterList: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <CharacterListContent />
    </Suspense>
  );
};

export default function HomePage() {
  return <CharacterList />;
}
