import { useState } from "react";
import productsData from "src/data/products";
import Navbar from "./components/Navbar";
import Filters from "./components/Filters";
import ProductList from "./components/ProductList";
import "./styles.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  let filteredProducts = [...productsData]
    .filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((p) =>
      category ? p.category === category : true
    );

  if (sort === "priceLow") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sort === "priceHigh") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  if (sort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <Navbar />
      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
      />
      <ProductList products={filteredProducts} />
    </>
  );
}

export default App;
