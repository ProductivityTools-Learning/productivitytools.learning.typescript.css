import { Product, products } from "../data/products";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

export function ProductPage() {
  const params = useParams<Params>();
  const id = params.id === undefined ? undefined : parseInt(params.id);

  const product = products.find((product) => product.id === id);

  return (
    <div className="text-center p-5">
      <h2 className="text-xl font-bolt text-slate-600">Hera are som great tools for React</h2>

      {product === undefined ? (
        <div>Page not found</div>
      ) : (
        <div>
          <h1>{product.name}</h1>
          <h1>{product.description}</h1>
        </div>
      )}
    </div>
  );
}
