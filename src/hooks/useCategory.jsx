import React from "react";
import { getCategories } from "../services/products";

export const useCategory = () => {
  const [category, setCategory] = React.useState([]);

  React.useEffect(() => {
    getCategories()
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  
  return { category };
};


