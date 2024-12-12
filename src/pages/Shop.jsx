import { Filtration, Container, ShopList} from "../components/"

export const ShopPage = () => {

    return (
        <div>
            <Container className="flex justify-between mt-[30px]">
             <Filtration />
             <ShopList />
            </Container>
        </div>
    )
}