import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">amazona</Link>
        </header>
        <main>
          <Routes>
            <Route path="/products/:slug" element={<ProductScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
