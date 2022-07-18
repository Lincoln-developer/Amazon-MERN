import data from './data';

function App() {
  return (
    <div>
      <header>
        <a href="/">amazona</a>
      </header>
      <main>
        <h1>Featured products</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/products/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-infor">
                <a href={`products/${product.slug}`}>
                <p>{product.name}</p>
                <p><strong>${product.price}</strong></p>
                </a>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
