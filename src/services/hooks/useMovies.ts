import { useQuery } from 'react-query';
import { api } from '../api';
import { filterDesc } from '../../utils/filterDesc';

interface Movie {
  id: string;
  title: string;
  director: string;
  description: string;
  year: number;
  coverImage: string;
}

interface GetMoviesResponse {
  totalCount?: number;
  movies: Movie[];
}

async function getMovies(page: number, filter?: string): Promise<GetMoviesResponse> {
  if (filter) {
    const { data } = await api.get('/movies', {
      params: {
        q: filter
      } 
    });

    const movies = data.map((movie: Movie) => {
      return {
        id: movie.id,
        title: movie.title,
        director: movie.director,
        description: filterDesc(movie.description),
        year: movie.year,
        coverImage: movie.coverImage
      };
    });
  
    return {
      movies,
    };
  }

  const { data, headers } = await api.get('movies', {
    params: {
      _page: page,
      _limit: 8
    }
  });

  const totalCount = Number(headers['x-total-count']);
  
  const movies = data.map((movie: Movie) => {
    return {
      id: movie.id,
      title: movie.title,
      director: movie.director,
      description: filterDesc(movie.description),
      year: movie.year,
      coverImage: movie.coverImage
    };
  });

  return {
    movies,
    totalCount
  };
}

export function useMovies(page: number, filter?: string) {
   return useQuery(['movies', page, filter], () => getMovies(page, filter), {
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
}