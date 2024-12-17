import React from "react"
import { useEffect } from "react";
import { CardItem, Container } from "./"
import { Button } from "antd"
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../redux/productsSlice"

export const BestSeller = () => {

    const {products, isLoading, error} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        console.log('Dispatched fetchProducts');
    }, [dispatch]);


    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }


    const items = products.slice(0, 4);

    return (
        <Container>
            <h1 className="font-bold text-center mt-[60px] text-[35px]">BEST SELLERS</h1>
            <div className="grid grid-cols-4 mt-[30px] gap-4 ">
                {items.map((item, index) => (
                    <CardItem {...item} key={index} />
                ))}
            </div>
            <div className="flex justify-center mt-[30px]">
                <Button type="link" href="/shop" className="text-[20px] underline underline-offset-4" >View All</Button>
            </div>
        </Container>
    )
}