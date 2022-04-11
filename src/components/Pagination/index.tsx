import { Container, Content, Text } from './styles';
import { PaginationItem } from './PaginationItem';

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
    .filter(page => page > 0)
}

export function Pagination({
  totalCountOfRegisters,
  registerPerPage = 8,
  currentPage = 1,
  onPageChange,
 }: PaginationProps) {

  const lastPage = Math.floor(totalCountOfRegisters / registerPerPage);

  const previusPages = currentPage > 1 
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
  <Container>
    <div>
      <strong>{currentPage}</strong> - <strong>{registerPerPage}</strong> of <strong>{totalCountOfRegisters}</strong>
    </div>
    <Content>

      {currentPage > (1 + siblingsCount) && (
        <>
          <PaginationItem onPageChange={onPageChange} number={1} />
          { currentPage > (2 + siblingsCount) && (
            <Text>...</Text>
          )}
        </>
      )}

      {previusPages.length > 0 && previusPages.map(page => {
        return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
      })}

      <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent/>

      {nextPages.length > 0 && nextPages.map(page => {
        return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
      })}
      
      {(currentPage + siblingsCount) < lastPage && (
        <>
          { (currentPage + siblingsCount) < lastPage && (
            <Text>...</Text>
          ) }
          <PaginationItem onPageChange={onPageChange}  number={lastPage} />
        </>
      )}

    </Content>
  </Container>
  );
}