import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="grid">
      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
