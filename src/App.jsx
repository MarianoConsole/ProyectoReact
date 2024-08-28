import { useEffect, useState } from "react";
import { ChakraProvider, Flex, Spinner } from "@chakra-ui/react";
import MainLayout from "./layout/MainLayout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { getAllProducts } from "./services/products";

function App() {
  // const [state, setState] = useState(0);
  // const [stateTwo, setStateTwo] = useState(0);

  // useEffect(() => {
  //   console.log("Se renderizo el componente App - controlado");
  // }, []);
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      if (res.status === 200) {
        setProductsData(res.data.products);
      } else {
        console.log("Error");
      }
    })
    .catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    })
  }, []);


  return (
    <ChakraProvider>
      <MainLayout>
        {loading ? (
          <Flex width={'100%'} height={'90vh'} alignItems={'center'} justifyContent={'center'}>
            <Spinner size='xl'/>
          </Flex>
        ) : (
          <ItemListContainer products={productsData}/>
        )}
      </MainLayout>
    </ChakraProvider>
  );
}

export default App;
