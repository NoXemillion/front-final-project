import { Container } from "./container"
import { InputNumber, Button, } from "antd";
import { useEffect, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById} from "../redux/productsSlice";
import { Loader } from "lucide-react";

export const ProductItem = () => {
    const { id } = useParams();
    
    const { product, isLoading, error } = useSelector((state) => state.products);
    

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch]);

    const [value, setValue] = useState(0);
    
    const handleChange = (value) => {
        setValue(value);
    };
    

    let brandName;

    switch (product.catalogBrandId) {
        case 1:
            brandName = "Adidas";
            break;
        case 2:
            brandName = "Nike";
            break;
        case 3:
            brandName = "Puma";
            break;
        case 4:
            brandName = "Crocs";
            break;
        case 5:
            brandName = "Converse";
            break;
        default:
            brandName = "Unknown";
    }

    let typeName;

    switch (product.catalogTypeId) {
        case 1:
            typeName = "Summer Shoes";
            break;
        case 2:
            typeName = "Winter Shoes";
            break;
        case 3:
            typeName = "Spring Shoes";
            break;
        case 4:
            typeName = "Autumn Shoes";
            break;
        case 5:
            typeName = "Sport Shoes";
            break;
        case 6: 
            typeName = "Casual Shoes";
            break;
        default:
            typeName = "Unknown";

    }

    // Проверяем, существует ли 
    const data = product;

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Если данных нет, показываем сообщение об ошибке или возвращаем null
    if (!data) {
        return <div>Product not found</div>;
    }

    return (
        <Container>
            <div className="flex justify-center mt-[50px]">
                <img src={data.pictureUrl} alt={data.name} className="w-[400px]" />
                <div className="w-full pl-[50px]">
                    <p className="font-bold text-[24px]">{data.name}</p>
                    <hr className="my-[40px]" />
                    <p className="font-bold text-[#40BFFF] mb-[20px] text-[22px]">{data.price} $</p>
                    <div className="w-[400px] flex flex-col gap-[20px]">
                        <p className="flex justify-between ">
                            <span>Brand:</span>
                            {brandName}
                        </p>
                        <p className="flex justify-between ">
                            <span>Category:</span>
                            {typeName}
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
            <div className="bg-slate-100 p-5 rounded-[10px]">
                <p className="font-bold text-[24px] ">Description</p>
                <p className="mt-[20px] pl-4">{data.description}</p>
            </div>
        </Container>
    );
};
