import React from 'react';

const ProductList = ({ products, handleEditProduct, handleDeleteProduct }) => {
  return (
    <ul>
      {products.map((product) => (
        <li
          key={product.id}
          className="flex justify-between items-center border-b p-2"
        >
          <div>
            <p>
              <strong>{product.name}</strong> — ${product.price} | Stock:{' '}
              {product.stockQuantity}
            </p>
            <p className="text-gray-500">{product.description}</p>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => handleEditProduct(product)}
              className="bg-yellow-500 text-white px-2 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
