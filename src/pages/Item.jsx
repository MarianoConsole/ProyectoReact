import React from "react";
import { useParams } from "react-router";
import { useProductsById } from "../hooks";
import { ItemDetailContainer } from "../components/ItemDetailContainer";

export const Item = () => {

    const { id } = useParams();

    const { product, loading } = useProductsById(id);
    return <ItemDetailContainer product={product}/>;
}