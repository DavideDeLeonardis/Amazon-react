import { useState, useEffect } from "react";

import ProductItem from "../components/ProductItem/ProductItem";
import useFetch from "../hooks/useFetch";

import classes from "../assets/scss/layout/_products.module.scss";

const AllProducts = () => {
   const [products, setProducts] = useState([]);
   const { isLoading, error, sendRequest: fetchProducts } = useFetch();

   useEffect(() => {
      const transformProducts = (productsObj) => {
         const loadedProducts = [];

         for (const key in productsObj) {
            loadedProducts.push({
               id: key,
               brand: productsObj[key].brand,
               name: productsObj[key].name,
               image: productsObj[key].image,
               description: productsObj[key].description,
               price: productsObj[key].price,
            });
         }

         setProducts(loadedProducts);
      };

      fetchProducts(
         {
            url: "https://react--clone-d9242-default-rtdb.firebaseio.com/products.json",
         },
         transformProducts
      );
   }, [fetchProducts]);

   if (isLoading) {
      return (
         <section>
            <p>Loading...</p>
         </section>
      );
   }

   if (error) {
      return (
         <section>
            <p>{error}</p>
         </section>
      );
   }

   const productsList = products.map((product) => (
      <ProductItem
         key={product.id}
         id={product.id}
         brand={product.brand}
         name={product.name}
         image={product.image}
         description={product.description}
         price={product.price}
      />
   ));

   return (
      <div className={classes.products}>
         <h3>RESULTS</h3>
         <ul>{productsList}</ul>
      </div>
   );
};

export default AllProducts;
