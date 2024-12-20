import React, { useEffect } from "react";
import { Slider, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBrands,
  setPriceRange,
  fetchTypes,
  setSelectedTypes,
  setSelectedBrands,
} from "../redux/filtersSlice";

export const Filtration = () => {
  const { brands, types, priceRange, selectedBrands, selectedTypes } = useSelector(
    (state) => state.filters
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchTypes());
  }, [dispatch]);

  const handleBrandChange = (checked, brandId) => {
    const updatedBrands = checked
      ? [...selectedBrands, brandId]
      : selectedBrands.filter((id) => id !== brandId);

    dispatch(setSelectedBrands(updatedBrands));
  };

  const handleTypeChange = (checked, typeId) => {
    const updatedTypes = checked
      ? [...selectedTypes, typeId]
      : selectedTypes.filter((id) => id !== typeId);

    dispatch(setSelectedTypes(updatedTypes));
  };

  return (
    <div className="flex gap-6 flex-col w-[330px]">
    
      <div className="bg-[#F6F7F8] flex flex-col gap-[20px] rounded-[6px] p-4">
        <p className="font-bold text-[18px]">PRICES</p>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <span>Range:</span>
            <span className="font-medium">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
          <Slider
            range
            step={10}
            value={priceRange}
            max={1000}
            onChange={(value) => dispatch(setPriceRange(value))}
          />
        </div>
      </div>

  
      <div className="bg-[#F6F7F8] flex flex-col gap-[20px] rounded-[6px] p-4">
        <p className="font-bold text-[18px]">BRAND</p>
        <div className="flex flex-col">
          {brands.map((brand) => (
            <div key={brand.id} className="flex justify-between">
              <div className="flex gap-3">
                <Checkbox
                  id={`brand-${brand.id}`}
                  checked={selectedBrands.includes(brand.id)}
                  onChange={(e) => handleBrandChange(e.target.checked, brand.id)}
                />
                <span>{brand.brand}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

   
      <div className="bg-[#F6F7F8] flex flex-col gap-[20px] rounded-[6px] p-4">
        <p className="font-bold text-[18px]">TYPE</p>
        <div className="flex flex-col">
          {types.map((type) => (
            <div key={type.id} className="flex justify-between">
              <div className="flex gap-3">
                <Checkbox
                  id={`type-${type.id}`}
                  checked={selectedTypes.includes(type.id)}
                  onChange={(e) => handleTypeChange(e.target.checked, type.id)}
                />
                <span>{type.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
