import { useState, useEffect } from "react";

import ProductItem from "../components/ProductItem/ProductItem";
import useFetch from "../hooks/useFetch";

import classes from "../assets/scss/layout/_main.module.scss";

const AllProducts = (props) => {
   const [products, setProducts] = useState([]);
   const { isLoading, error, sendRequest: fetchProducts } = useFetch();

   const showCartHandler = () => {
      props.onShowCart();
   };

   useEffect(() => {
      const transformProducts = (productsObj) => {
         const loadedProducts = [];

         for (const key in productsObj) {
            loadedProducts.push({
               id: key,
               name: productsObj[key].name,
               image: productsObj[key].image,
               price: productsObj[key].price,
               primeAvailable: productsObj[key].primeAvailable,
               isBestSeller: productsObj[key].isBestSeller,
               discount: productsObj[key].discount,
               stockNumber: productsObj[key].stockNumber,
               stars: productsObj[key].stars,
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
         price={product.price}
         primeAvailable={product.primeAvailable}
         isBestSeller={product.isBestSeller}
         discount={product.discount}
         stockNumber={product.stockNumber}
         stars={product.stars}
         onShowCart={showCartHandler}
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
