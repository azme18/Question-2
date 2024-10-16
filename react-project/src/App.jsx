import React from 'react';

const products = [
  { id: 1, name: "Product 1", price: "20.00", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product 2", price: "30.00", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product 3", price: "40.00", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Product 4", price: "50.00", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Product 5", price: "60.00", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Product 6", price: "70.00", image: "https://via.placeholder.com/150" },
];

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-50 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Daraz Clone</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Products</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Cart</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow p-6">
        <h2 className="text-2xl mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="card bg-base-100 shadow-lg">
              <figure>
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-xl text-primary">${product.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-green-500 text-white p-4">
        <div className="container mx-auto text-center">
          <p>© 2024 Daraz Clone. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
