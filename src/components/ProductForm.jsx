import React from 'react';
import Select from 'react-select';

const ProductForm = ({
  brands,
  types,
  newProduct,
  setNewProduct,
  handleAddOrUpdateProduct,
  editingProductId,
}) => {
  return (
    <div className="mb-4">
      <div className="grid grid-cols-5 gap-4 mb-4">
        <input
          type="text"
          placeholder="Name"
          value={newProduct.name}
          onChange={(e) =>
            setNewProduct({ ...newProduct, name: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) =>
            setNewProduct({ ...newProduct, description: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Picture URL"
          value={newProduct.pictureUrl}
          onChange={(e) =>
            setNewProduct({ ...newProduct, pictureUrl: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Stock Quantity"
          value={newProduct.stockQuantity}
          onChange={(e) =>
            setNewProduct({
              ...newProduct,
              stockQuantity: parseInt(e.target.value),
            })
          }
          className="border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Select Brand
          </label>
          <Select
            options={brands}
            value={
              newProduct.catalogBrandId
                ? brands.find((b) => b.value === newProduct.catalogBrandId)
                : null
            }
            placeholder="Select Brand"
            onChange={(selectedOption) =>
              setNewProduct({
                ...newProduct,
                catalogBrandId: selectedOption.value,
              })
            }
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Select Type
          </label>
          <Select
            options={types}
            value={
              newProduct.catalogTypeId
                ? types.find((t) => t.value === newProduct.catalogTypeId)
                : null
            }
            placeholder="Select Type"
            onChange={(selectedOption) =>
              setNewProduct({
                ...newProduct,
                catalogTypeId: selectedOption.value,
              })
            }
          />
        </div>
      </div>

      <button
        onClick={handleAddOrUpdateProduct}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {editingProductId ? 'Update Product' : 'Add Product'}
      </button>
    </div>
  );
};

export default ProductForm;
