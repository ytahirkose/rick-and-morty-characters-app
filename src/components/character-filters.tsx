import React from 'react';
import { parseAsString, useQueryStates } from 'nuqs';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter, X } from 'lucide-react';

export const CharacterFilters: React.FC = () => {
  const [queryStates, setQueryStates] = useQueryStates({
    status: parseAsString.withDefault('all').withOptions({ shallow: false }),
    gender: parseAsString.withDefault('all').withOptions({ shallow: false }),
  });

  const currentStatus = queryStates.status || 'all';
  const currentGender = queryStates.gender || 'all';

  const handleStatusChange = (value: string) => {
    if (value === 'all') {
      setQueryStates({ status: null });
    } else {
      setQueryStates({ status: value });
    }
  };

  const handleGenderChange = (value: string) => {
    if (value === 'all') {
      setQueryStates({ gender: null });
    } else {
      setQueryStates({ gender: value });
    }
  };

  const clearFilters = () => {
    setQueryStates({ status: null, gender: null });
  };

  const hasActiveFilters = currentStatus !== 'all' || currentGender !== 'all';

  return (
    <div className="bg-gradient-to-r from-white to-gray-50/50 rounded-xl border-2 border-gray-200/50 p-8 shadow-lg backdrop-blur-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Filter className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            Character Filters
          </h2>
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground hover:text-foreground hover:bg-destructive/10 hover:border-destructive/30 transition-all duration-200"
          >
            <X className="h-4 w-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <Label htmlFor="status-filter">Character Status</Label>
          <Select value={currentStatus} onValueChange={handleStatusChange}>
            <SelectTrigger id="status-filter">
              <SelectValue placeholder="Select character status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="alive">Alive</SelectItem>
              <SelectItem value="dead">Dead</SelectItem>
              <SelectItem value="unknown">Unknown</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label
            htmlFor="gender-filter"
            className="text-sm font-semibold text-foreground"
          >
            Character Gender
          </Label>
          <Select value={currentGender} onValueChange={handleGenderChange}>
            <SelectTrigger id="gender-filter">
              <SelectValue placeholder="Select character gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Genders</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="genderless">Genderless</SelectItem>
              <SelectItem value="unknown">Unknown</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
