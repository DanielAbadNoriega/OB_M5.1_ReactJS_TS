import React, { useEffect, useState } from "react";
import { getProducts } from "../controllers/productController";
import Product from "./Product";

interface ProductInterface {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  reating: object;
  title: string;
}

function ProductList(): JSX.Element {
  const [productList, setProductList] = useState<ProductInterface[]>([]);

  useEffect(() => {
    getProducts()
      .then((r) => {
        setProductList(r.data);
        console.log("[ ProductList ] Getproducts: ", r.data);
      })
      .catch((e) => console.error("[ ProducList ] Error: ", e));
  }, []);

  return (
    <>
      {productList.length === 0 ? (
        "No products"
      ) : (
        <div className="mt-4 grid gap-2 justify-items-center md:grid-cols-3 sm:grid-cols-1 sm:justify-items-center" >
          {productList.map((product:ProductInterface, i: number): JSX.Element => <Product
            key={i}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />)}
          
        </div>
      )}
    </>
  );
}

export default ProductList;
