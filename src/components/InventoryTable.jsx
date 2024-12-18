import React from 'react';
import InventoryRow from './InventoryRow';

const InventoryTable = ({ inventory, editingItem, setEditingItem, handleUpdateStock }) => {
  return (
    <table className="min-w-full table-fixed border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 text-left border-b w-1/2">Product</th>
          <th className="p-2 text-center border-b w-1/4">Stock Level</th>
          <th className="p-2 text-center border-b w-1/4">Action</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item) => (
          <InventoryRow
            key={item.id}
            item={item}
            editingItem={editingItem}
            setEditingItem={setEditingItem}
            handleUpdateStock={handleUpdateStock}
          />
        ))}
      </tbody>
    </table>
  );
};

export default InventoryTable;
