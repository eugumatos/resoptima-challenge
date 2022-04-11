import { Button } from './styles';

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent, onPageChange, number }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button isCurrent={isCurrent}>
        {number}
      </Button>
    );
  }

  return (
    <Button onClick={() => onPageChange(number)}>
      {number}
    </Button>
  );
}