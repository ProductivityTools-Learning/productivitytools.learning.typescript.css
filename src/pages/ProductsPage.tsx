import { Link } from "react-router-dom";
import { Product, products } from "../data/products";

export function ProductsPage() {
  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bolt text-slate-600">Hera are som great tools for React</h2>
      <ul className="list-none m-0 p-0">
        {products.map((product) => (
          <li key={product.id} className="p-1 text-base text-slate-800">
            <Link to={`${product.id}`}> {product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
