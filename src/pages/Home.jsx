import { BestSeller, MyCarousel, Banner, WhyUs, SearchInput, } from "../components"

export const HomePage = () => {
    return (
        <div>
            <MyCarousel />
            <BestSeller />
            <Banner />
            <WhyUs />
            <SearchInput />
        </div>
    )
}
