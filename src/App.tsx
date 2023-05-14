import { ChakraProvider } from '@chakra-ui/react'
import { globalTheme } from './styles/global.theme';
import AllRoutes from './routes/allRoutes';
import { ProvidersContext } from './contexts/providers.context';

function App() {
  return (
    <ChakraProvider theme={globalTheme}>
      <ProvidersContext>
          <AllRoutes />
      </ProvidersContext>
    </ChakraProvider>
  );
}

export default App;
