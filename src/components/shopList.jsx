import { useSelector, useDispatch } from "react-redux";
import { CardItem } from "./cardItem";
import { useEffect } from "react";
import Loader from "./Loader";
import { fetchProducts } from "../redux/productsSlice";

export const ShopList = () => {
    const { products, isLoading, error } = useSelector((state) => state.products);
    const { priceRange, selectedBrands, selectedTypes } = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>{error}</div>;
    }


    const filteredProducts = products.filter((item) => {
        const withinPriceRange = item.price >= priceRange[0] && item.price <= priceRange[1];
        
        const matchesBrand =
            selectedBrands.length === 0 || selectedBrands.includes(item.catalogBrandId);

        const matchesType =
            selectedTypes.length === 0 || selectedTypes.includes(item.catalogTypeId);

        return withinPriceRange && matchesBrand && matchesType;
    });

    return (
        <div className="grid grid-cols-3 gap-[27px]">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((item) => <CardItem {...item} key={item.id} />)
            ) : (
                <div>Продукты отсутствуют</div>
            )}
        </div>
    );
};
