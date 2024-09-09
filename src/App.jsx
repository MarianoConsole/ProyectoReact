import { ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import { ItemListContainer } from "./components";
import { useProducts } from "./hooks/useProducts";
import { useProductsById } from "./hooks";
import { MainRouter } from "./routes";

function App() {
  const { productsData, loading } = useProducts();
  const { productData } = useProductsById(1);

  return (
    <ChakraProvider>
      <MainRouter />
    </ChakraProvider>
  );
}

export default App;
