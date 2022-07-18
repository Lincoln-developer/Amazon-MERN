import data from "../data";
import { Link } from "react-router-dom";

function HomeScreen() {
  return (
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/products/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-infor">
              <Link to={`products/${product.slug}`}>
                <p>{product.name}</p>
                <p>
                  <strong>${product.price}</strong>
                </p>
              </Link>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
