import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Character } from '@/types/api';
import { formatDate, getGenderIcon, getStatusColor } from '@/lib/utils';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const statusColor = getStatusColor(character.status);
  const genderIcon = getGenderIcon(character.gender);

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg hover:scale-[1.02]">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={character.image}
          alt={character.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight text-gray-900">
            {character.name}
          </CardTitle>
          <div className="flex flex-col items-end gap-2">
            <Badge
              variant="outline"
              className={`px-2 py-1 text-xs font-medium ${statusColor}`}
            >
              {character.status}
            </Badge>
            <Badge variant="secondary" className="px-2 py-1 text-xs">
              {genderIcon} {character.gender}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-medium">Species:</span>
            <span>{character.species}</span>
            {character.type && (
              <>
                <span className="text-gray-400">•</span>
                <span>{character.type}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">Origin:</span>
            <span>{character.origin.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">Location:</span>
            <span>{character.location.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">Episodes:</span>
            <span>{character.episode.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-medium">Created:</span>
            <span>{formatDate(character.created)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
