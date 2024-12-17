import React, { useEffect } from "react";
import { Slider, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands, setPriceRange, fetchTypes} from "../redux/filtersSlice";

export const Filtration = () => {
  const { brands, types, priceRange, } = useSelector((state) => state.filters);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBrands());
    dispatch(fetchTypes());
  }, [dispatch]);


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
            onChange={(value) => dispatch(setPriceRange(value))} // Add onChange to update the state
          />
        </div>
      </div>

      <div className="bg-[#F6F7F8] flex flex-col gap-[20px] rounded-[6px] p-4">
        <p className="font-bold text-[18px]">BRAND</p>
        <div className="flex flex-col">
          {brands.map((brand) => (
            <div key={brand.id} className="flex justify-between">
              <div className="flex gap-3">
                <Checkbox />
                <span>{brand.name}</span>
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
                <Checkbox />
                <span>{type.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
