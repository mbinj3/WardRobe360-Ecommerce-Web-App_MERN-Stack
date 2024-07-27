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
    fetch(`${window.location.origin}/products`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchMenProducts = () => {
    fetch(`${window.location.origin}/categories/men`)
      .then((res) => res.json())
      .then((json) => {
        setMenProducts(json);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchWomenProducts = () => {
    fetch(`${window.location.origin}/categories/women`)
      .then((res) => res.json())
      .then((json) => { 
        setWomenProducts(json);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchChildrenProducts = () => {
    fetch(`${window.location.origin}/categories/children`)
      .then((res) => res.json())
      .then((json) => {
        setChildrenProducts(json);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchBagsProducts = () => {
    fetch(`${window.location.origin}/categories/bags`)
      .then((res) => res.json())
      .then((json) => {
        setBagsProducts(json);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchShoesProducts = () => {
    fetch(`${window.location.origin}/categories/shoes`)
      .then((res) => res.json())
      .then((json) => {
        setShoesProducts(json);
      })
      .catch(err => {
        console.error("Error fetching data", err);
      });
  };

  const fetchAccessoriesProducts = () => {
    fetch(`${window.location.origin}/categories/accessories`)
      .then((res) => res.json())
      .then((json) => {
        setAccessoriesProducts(json);
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
