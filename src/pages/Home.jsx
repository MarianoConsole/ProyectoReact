import React from 'react'
import { ItemListContainer } from '../components'
import { useProducts } from '../hooks';


export const home = () => {

    const { products, loading } = useProducts();

  return <ItemListContainer greeting="Holaa"/>;
}
