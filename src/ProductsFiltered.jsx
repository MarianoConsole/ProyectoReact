import { useProducts } from "./hooks/useProducts";

export const ProductsFiltered = ({ products }) => {
    const { productsData } = useProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        <ComponenteFiltrado products={productsData} />
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

