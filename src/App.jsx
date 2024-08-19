import { useState } from 'react';
import { Button, ChakraProvider, Text, Flex } from '@chakra-ui/react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
ItemListContainer

function App() {

const [count, setCount] = useState(0);

const handleRemoveItem = () =>{
  setCount(count - 1);
};
const handleAddItem = () => {
  setCount(count + 1);
};



  return (
  <ChakraProvider>
   <NavBar />
   <Flex>
    <Button onClick={handleRemoveItem}>-</Button>
    <Text>
      {count}
    </Text>
    <Button onClick={handleAddItem}>+</Button>
   </Flex>

   <Flex flexDirection={'column'} alignItems={'center'}>
    <ItemListContainer label="Bienvenidos a mi pagina"/>
    <ItemListContainer label="Mi nombre es el maro"/>

   </Flex>

  </ChakraProvider>)
};

export default App;
