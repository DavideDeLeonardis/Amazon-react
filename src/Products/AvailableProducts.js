import { useState, useEffect } from "react";

import ProductItem from "./ProductItem/ProductItem";

const AvailableProducts = () => {
   const [products, setProducts] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [httpError, setHttpError] = useState();

   useEffect(() => {
      const fetchProducts = async () => {
         const response = await fetch(
            "https://react--clone-d9242-default-rtdb.firebaseio.com/products.json"
         );

         if (!response.ok) {
            throw new Error("Something went wrong!");
         }

         const responseData = await response.json();

         const loadedMeals = [];

         for (const key in responseData) {
            loadedMeals.push({
               id: key,
               brand: responseData[key].brand,
               name: responseData[key].name,
               image: responseData[key].image,
               description: responseData[key].description,
               price: responseData[key].price,
            });
         }

         setProducts(loadedMeals);
         setIsLoading(false);
      };

      fetchProducts().catch((error) => {
         setIsLoading(false);
         setHttpError(error.message);
      });
   }, []);

   if (isLoading) {
      return (
         <section>
            <p>Loading...</p>
         </section>
      );
   }

   if (httpError) {
      return (
         <section>
            <p>{httpError}</p>
         </section>
      );
   }

   const productsList = products.map((product) => (
      <ProductItem
         key={product.id}
         brand={product.brand}
         name={product.name}
         image={product.image}
         description={product.description}
         price={product.price}
      />
   ));

   return <ul>{productsList}</ul>;
};

export default AvailableProducts;
