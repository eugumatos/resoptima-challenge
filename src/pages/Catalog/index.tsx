import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SyncLoader } from 'react-spinners';
import { useMovies } from '../../services/hooks/useMovies';
import { SearchBox } from '../../components/SearchBox';
import { Pagination } from '../../components/Pagination';
import { Container, Content, MovieList } from './styles';

type FormData = {
  search: string;
}

export function Catalog() {
  const [page, setPage] = useState<number>(1);
  const [filter, setFilter] = useState<string>("")
  const { register, handleSubmit } = useForm<FormData>();
  
  const { data, isLoading } = useMovies(page, filter);
 
  async function handleFilter(value: FormData) {
   setFilter(value.search);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handleFilter)}>
        <SearchBox {...register("search")} />
      </form>

      <Content>
        { isLoading ? (
          <SyncLoader size={15} color="#848484" />
        ) : (
          <MovieList>
          { data?.movies.map(movie => (
            <li key={movie.id}>
              <img src={movie.coverImage} alt={movie.title}  />
              <div>
                <strong>{movie.title}</strong>
                <span>
                  <i>Director:</i> {movie.director}
                </span>
                <p>{movie.description}</p>
              </div>
            </li>
          )) }     
        </MovieList>
        ) }
      </Content>

      <div>
        <Pagination 
          totalCountOfRegisters={100}
          currentPage={page}
          onPageChange={setPage} 
        />
      </div>
    </Container>
  );
}