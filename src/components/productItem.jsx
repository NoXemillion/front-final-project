import { Container } from "./container"
import { InputNumber, Button, } from "antd";
import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ProductItem = () => {
    const [value, setValue] = useState(0);

    const handleChange = (value) => {
        setValue(value);
    };
    
    const {products, isLoading, error} = useSelector((state) => state.products);

    const {id} = useParams();

    const data = products[id-1];

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <Container>
            <div className="flex justify-center mt-[50px]">
                <img src={data.pictureUrl} alt={data.name} className="w-[400px]" />
                <div className="w-full pl-[50px]">
                    <p className="font-bold text-[24px]">{data.name}</p>
                    <hr className="my-[40px]" />
                    <p className="font-bold text-[#40BFFF] mb-[20px] text-[22zpx]">{data.price} $</p>
                    <div className="w-[400px] flex flex-col gap-[20px]">
                        <p className="flex justify-between ">
                            <span>Brand:</span>
                            {data.catalogBrandId}
                        </p>
                        <p className="flex justify-between ">
                            <span>Category:</span>
                            {data.catalogTypeId}
                        </p>
                        <p className="flex justify-between ">
                            <span>Quantity:</span>
                            {data.stockQuantity}
                        </p>
                    </div>
                    <hr className="my-[30px]" />
                    <div className="flex justify-between ">
                        <InputNumber
                            min={0}
                            max={100} 
                            value={value}
                            onChange={handleChange}
                            style={{ backgroundColor: "#ededed", color: "white" }}
                            className="w-[100px] h-[40px] flex justify-center items-center"
                        />
                        <Button className="h-[40px] w-[150px]" icon={<ShoppingCartOutlined />}>Add To Cart</Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}