import { useState, useEffect } from "react";

import ProductItem from "../components/ProductItem/ProductItem";
import useFetch from "../hooks/useFetch";

import classes from "../assets/scss/layout/_main.module.scss";

const AllProducts = () => {
   const [products, setProducts] = useState([]);
   const { isLoading, error, sendRequest: fetchProducts } = useFetch();

   useEffect(() => {
      const transformProducts = (productsObj) => {
         const loadedProducts = [];

         for (const key in productsObj) {
            loadedProducts.push({
               id: key,
               name: productsObj[key].name,
               image: productsObj[key].image,
               description: productsObj[key].description,
               price: productsObj[key].price,
               primeAvailable: productsObj[key].primeAvailable,
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
         name={product.name}
         image={product.image}
         description={product.description}
         price={product.price}
         primeAvailable={product.primeAvailable}
      />
   ));

   return (
      <div className={classes.products_container}>
         <h3>RESULTS</h3>
         <ul className={classes.products}>{productsList}</ul>
      </div>
   );
};

export default AllProducts;
