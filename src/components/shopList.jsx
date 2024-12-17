import { useSelector, useDispatch } from "react-redux"
import { CardItem } from "./cardItem"
import { useEffect } from "react";
import { fetchProducts } from "../redux/productsSlice";
export const ShopList = () => {
    const {products, isLoading, error} = useSelector((state) => state.products);
    const {priceRange} = useSelector((state) => state.filters);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="grid grid-cols-3 gap-[27px]">
            {Array.isArray(products) && products.length > 0 ? (
                products.filter((item) => item.price >= priceRange[0] && item.price <= priceRange[1]).map((item, index) => (
                    <CardItem {...item} key={index} />
                ))
            ) : (
                <div>Продукты отсутствуют</div>
            )}
        </div>
    );
}