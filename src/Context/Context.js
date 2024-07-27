import React, { createContext, useState, useEffect } from 'react';

const addCounterContext = createContext();



function Context({ children }) {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [childrenProducts, setChildrenProducts] = useState([]);
  const [bagsProducts, setBagsProducts] = useState([]);
  const [shoesProducts, setShoesProducts] = useState([]);
  const [accessoriesProducts, setAccessoriesProducts] = useState([]);

  const fetchAllProducts = () => {
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .then((json) => {
        console.log("fetched data", json);
        const fetchedProducts = json.products;
        setProducts(fetchedProducts);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchMenProducts = () => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then((res) => res.json())
      .then((json) => {
        console.log("fetched data", json);
        const fetchedMenProducts = json.products;
        setMenProducts(fetchedMenProducts);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchWomenProducts = () => {
    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then((res) => res.json())
      .then((json) => {
        console.log("fetched data", json);
        const fetchedWomenProducts = json.products;
        setWomenProducts(fetchedWomenProducts);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchChildrenProducts = () => {
    fetch("https://dummyjson.com/products/category/sports-accessories")
      .then((res) => res.json())
      .then((json) => {
        console.log("fetched data", json);
        const fetchedChildrenProducts = json.products;
        setChildrenProducts(fetchedChildrenProducts);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchBagsProducts = () => {
    fetch("https://dummyjson.com/products/category/womens-bags")
      .then((res) => res.json())
      .then((json) => {
        console.log("fetched data", json);
        const fetchedBagsProducts = json.products;
        setBagsProducts(fetchedBagsProducts);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchShoesProducts = () => {
    fetch("https://dummyjson.com/products/category/mens-shoes")
      .then((res) => res.json())
      .then((json) => {
        console.log("fetched data", json);
        const fetchedShoesProducts = json.products;
        setShoesProducts(fetchedShoesProducts);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchAccessoriesProducts = () => {
    fetch("https://dummyjson.com/products/category/mens-watches")
      .then((res) => res.json())
      .then((json) => {
        console.log("fetched data", json);
        const fetchedAccessoriesProducts = json.products;
        setAccessoriesProducts(fetchedAccessoriesProducts);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  useEffect(() => {
    fetchAllProducts();
    fetchMenProducts();
    fetchWomenProducts();
    fetchChildrenProducts();
    fetchBagsProducts();
    fetchShoesProducts();
    fetchAccessoriesProducts();
  }, []);

  const addToCart = (productId, category = "general") => {
    setCount((prevCount) => prevCount + 1);
    setCart((prevCart) => {
      let product;
      if (category === "allProducts") {
        product = products.find((product) => product.id === productId);
      } else if (category === 'men') {
        product = menProducts.find((product) => product.id === productId);
      } else if (category === 'women') {
        product = womenProducts.find((product) => product.id === productId);
      } else if (category === 'children') {
        product = childrenProducts.find((product) => product.id === productId);
      } else if (category === 'bags') {
        product = bagsProducts.find((product) => product.id === productId);
      } else if (category === 'shoes') {
        product = shoesProducts.find((product) => product.id === productId);
      } else {
        product = accessoriesProducts.find((product) => product.id === productId);
      }
      return [...prevCart, product];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <addCounterContext.Provider value={{
      count,
      addToCart,
      removeFromCart,
      products,
      cart,
      setCart,
      menProducts,
      womenProducts,
      childrenProducts,
      bagsProducts,
      shoesProducts,
      accessoriesProducts
    }}>
      {children}
    </addCounterContext.Provider>
  );
}

export { addCounterContext };
export default Context;
