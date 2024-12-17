import React from "react";
import { Link } from "react-router-dom";

export const CardItem = ({id, pictureUrl, name, price, rat}) => {


    
    return (
        <Link to={`/product/${id}`}>
            <div className="w-[300px] cursor-pointer">
                <img src={pictureUrl} alt={name} className="w-[300px] h-[270px] object-cover border-t-2 border-x-2" />
                <div className="border-2 flex justify-center h-[100px] gap-2 flex-col items-center">
                    <p className="font-bold text-center">{name}</p>
                    <p className="font-bold text-[18px] text-[#40BFFF]">{price} $</p>
                </div>
            </div>
        </Link>
    )
}