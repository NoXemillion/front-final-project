const InventoryRow = ({ item, editingItem, setEditingItem, handleUpdateStock }) => {
    const isEditing = editingItem.id === item.id;
  
    return (
      <tr className={item.stockQuantity <= 10 ? 'bg-red-100' : 'bg-white'}>
        <td className="p-2 border-b w-1/2">{item.name}</td>
  
        <td className="p-2 border-b text-center w-1/4">
          {isEditing ? (
            <input
              type="number"
              value={editingItem.stockQuantity}
              onChange={(e) =>
                setEditingItem({
                  ...editingItem,
                  stockQuantity: parseInt(e.target.value) || '',
                })
              }
              className="p-1 border rounded w-20"
            />
          ) : (
            <span>{item.stockQuantity}</span>
          )}
        </td>
  
        <td className="p-2 border-b text-center w-1/4">
          {isEditing ? (
            <>
              <button
                onClick={() => handleUpdateStock(item.id)}
                className="bg-green-500 text-white px-3 py-1 rounded mr-2"
              >
                Save
              </button>
              <button
                onClick={() => setEditingItem({ id: null, stockQuantity: '' })}
                className="bg-gray-500 text-white px-3 py-1 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() =>
                setEditingItem({ id: item.id, stockQuantity: item.stockQuantity })
              }
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Update Stock
            </button>
          )}
        </td>
      </tr>
    );
  };
  
  export default InventoryRow;
  