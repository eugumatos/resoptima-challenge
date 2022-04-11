import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';
import { GlobalStyle } from './styles/global';
import { Catalog } from './pages/Catalog';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Catalog />
      <GlobalStyle />
    </QueryClientProvider>
  );
}

