import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';
import { ScrollToTop, ToastifyContainer } from './components';
import { DexProvider } from './context/dex';
import { Web3Provider } from './context/web3';
import Routers from './routers';
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Web3Provider>
        <DexProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routers />
          </BrowserRouter>
        </DexProvider>
      </Web3Provider>
      <ToastifyContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
