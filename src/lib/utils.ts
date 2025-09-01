import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'text-green-600 bg-green-100';
    case 'dead':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
}

export function getGenderIcon(gender: string): string {
  switch (gender.toLowerCase()) {
    case 'male':
      return '♂';
    case 'female':
      return '♀';
    case 'genderless':
      return '⚪';
    default:
      return '❓';
  }
}
