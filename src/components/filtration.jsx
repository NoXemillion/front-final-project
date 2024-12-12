import React from "react";
import { useState } from "react";
import {Slider, Checkbox, Rate} from "antd";
export const Filtration = () => {

    const brandsData = [
        {name: "Adidas", copies: 99, checked: false},
        {name: "Nike", copies: 99, checked: false},
        {name: "Puma", copies: 99, checked: false},
        {name: "Reebok", copies: 99, checked: false},
        {name: "New Balance", copies: 0, checked: false},
        {name: "Converse", copies: 0, checked: false},
    ]

    const [priceRange, setPriceRange] = useState([0, 1000]);
    const [brands, setBrands] = useState(brandsData);
    const [rating, setRating] = useState(5);

    const onPriceChange = (value) => {
        setPriceRange(value);
        const [min, max] = value;
      };



    return (
        <div className="flex gap-6 flex-col w-[330px]">
            <div className="bg-[#F6F7F8] flex flex-col gap-[20px] rounded-[6px]  p-4 ">
                <p className="font-bold text-[18px] ">RATING</p>
                <Rate onChange={setRating} value={rating} allowHalf className="text-center justify-center flex flex-row gap-[25px]"/>
            </div>
            <div className="bg-[#F6F7F8] flex flex-col gap-[20px] rounded-[6px]  p-4 ">
                <p className="font-bold text-[18px] ">PRICES</p>
                <div className="flex flex-col">
                        <div className="flex justify-between">
                        <span>Ranger:</span>
                        <span className="font-medium">${priceRange[0]} - ${priceRange[1]}</span>

                        </div>
                        <Slider
                            range
                            step={10} 
                            defaultValue={[0, 1000]} 
                            max={1000} 
                            onChange={onPriceChange}
                        />
                </div>
            </div>
            <div className="bg-[#F6F7F8] flex flex-col gap-[20px] rounded-[6px] p-4 ">
                <p className="font-bold text-[18px] ">BRAND</p>
                <div className="flex flex-col">
                    {brands.map((brand) => (
                        <div key={brand.name} className="flex justify-between">
                            <div className="flex gap-3">
                                <Checkbox />
                                <span>{brand.name}</span>
                            </div>
                            <span>{brand.copies}</span>
                        </div>

                    ))}
                    </div>
                </div>
            </div>
    )
}