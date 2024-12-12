import React from "react";
import { useState } from "react";
import {Rate} from "antd";

export const CardItem = ({imageURL, title, price, rat}) => {
    const [rating, setRating] = useState(rat);

    
    return (
        <div className="w-[300px]">
            <img src={imageURL} alt="i" className="w-[300px] h-[270px] object-cover" />
            <div className="border-2 flex justify-center h-[100px] gap-2 flex-col items-center">
                <p className="font-bold">{title}</p>
                <Rate onChange={setRating} value={rating} allowHalf />
                <p className="font-bold text-[18px] text-[#40BFFF]">{price}</p>
            </div>
        </div>
    )
}