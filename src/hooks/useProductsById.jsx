import { useState, useEffect } from "react";
import { getProductsById } from "../services/products";

export const useProductsById = (id) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([null]);

  useEffect(() => {
    getProductsById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { product, loading };
};
