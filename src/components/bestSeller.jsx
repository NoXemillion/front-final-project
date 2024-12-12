import React from "react"
import { CardItem, Container } from "./"
import { Button } from "antd"

export const BestSeller = () => {

    const items = [
        {
            imageURL: "https://s3-alpha-sig.figma.com/img/066b/570c/2d5fae698824816b1c325cd15eee0fd9?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AQl9FU~GL323CVh81XRbRr6O~uQX-nselNTOUh1FCFHnW7MpX0npjR-hfvfiwWxsgQGDjpceawDcl5hh~LF2Y182RpmiJM2HKHDFCM1gi77e~8URffD7bOq8ALlieln5Mw-K1ipGBo2X5kAG-h5qa~P5LunMKhyDNK4e2emw~KM0kLthkqaGakn0SV4m0kceyEiANuwlPRnfkz0l9KUD7BYYFJodFWMWSk8q~PO6J~v7yRha3LZQw8KX60j5Fu8ekApog7aMveaK3~KbUkXjVCmWoEMMU6oNMAHWdimitsOFG7b7fY4xmeOm5M3ifCppP2WQn1W40UF20zl-oOJX6A__",
            title: "Nike Air Max 270 React",
            rat: 3.5,
            price: "$299,43"
        },
        {
            imageURL: "https://s3-alpha-sig.figma.com/img/73e1/591b/f33714478b20a9a9897793f51e29ae75?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlXwf2d2r95QBvE0u8DUoJTnrMyC4cLfCyGB-74KQynl6MVAdo7cxPwT~jIAzK1BtzQptcRWKR3J23xRhYFlLAPK0VnaosQErt92fJfS4JEwbvVW7wg0qwhZBamrrLi044fjPZkrmGa2SczMMAxD4UA82TJIVCidPRhIGFCHAZKiSXcnF405BYqpn6EXRp8jOBQBTybU4QEIemQdV5-WhOZxOagT-JyEvtNKDoQj9FpV1igZJdwY07qf0OIF91XGu201wIA9~12mO~SSUe36tA-SchnGuQprAQkxw~YKaFUGAeGyzhuXGgKKlfadAkU7VM3GtH3KG5YlZYuGGqG74w__",
            title: "Nike Air Max 270 React",
            rat: 4.5,
            price: "$299,43"
        },
        {
            imageURL: "https://s3-alpha-sig.figma.com/img/73e1/591b/f33714478b20a9a9897793f51e29ae75?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlXwf2d2r95QBvE0u8DUoJTnrMyC4cLfCyGB-74KQynl6MVAdo7cxPwT~jIAzK1BtzQptcRWKR3J23xRhYFlLAPK0VnaosQErt92fJfS4JEwbvVW7wg0qwhZBamrrLi044fjPZkrmGa2SczMMAxD4UA82TJIVCidPRhIGFCHAZKiSXcnF405BYqpn6EXRp8jOBQBTybU4QEIemQdV5-WhOZxOagT-JyEvtNKDoQj9FpV1igZJdwY07qf0OIF91XGu201wIA9~12mO~SSUe36tA-SchnGuQprAQkxw~YKaFUGAeGyzhuXGgKKlfadAkU7VM3GtH3KG5YlZYuGGqG74w__",
            title: "Nike Air Max 270 React",
            rat: 4.5,
            price: "$299,43"
        },
        {
            imageURL: "https://s3-alpha-sig.figma.com/img/73e1/591b/f33714478b20a9a9897793f51e29ae75?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlXwf2d2r95QBvE0u8DUoJTnrMyC4cLfCyGB-74KQynl6MVAdo7cxPwT~jIAzK1BtzQptcRWKR3J23xRhYFlLAPK0VnaosQErt92fJfS4JEwbvVW7wg0qwhZBamrrLi044fjPZkrmGa2SczMMAxD4UA82TJIVCidPRhIGFCHAZKiSXcnF405BYqpn6EXRp8jOBQBTybU4QEIemQdV5-WhOZxOagT-JyEvtNKDoQj9FpV1igZJdwY07qf0OIF91XGu201wIA9~12mO~SSUe36tA-SchnGuQprAQkxw~YKaFUGAeGyzhuXGgKKlfadAkU7VM3GtH3KG5YlZYuGGqG74w__",
            title: "Nike Air Max 270 React",
            rat: 4.5,
            price: "$299,43"
        },
        {
            imageURL: "https://s3-alpha-sig.figma.com/img/73e1/591b/f33714478b20a9a9897793f51e29ae75?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlXwf2d2r95QBvE0u8DUoJTnrMyC4cLfCyGB-74KQynl6MVAdo7cxPwT~jIAzK1BtzQptcRWKR3J23xRhYFlLAPK0VnaosQErt92fJfS4JEwbvVW7wg0qwhZBamrrLi044fjPZkrmGa2SczMMAxD4UA82TJIVCidPRhIGFCHAZKiSXcnF405BYqpn6EXRp8jOBQBTybU4QEIemQdV5-WhOZxOagT-JyEvtNKDoQj9FpV1igZJdwY07qf0OIF91XGu201wIA9~12mO~SSUe36tA-SchnGuQprAQkxw~YKaFUGAeGyzhuXGgKKlfadAkU7VM3GtH3KG5YlZYuGGqG74w__",
            title: "Nike Air Max 270 React",
            rat: 4.5,
            price: "$299,43"
        },
        {
            imageURL: "https://s3-alpha-sig.figma.com/img/73e1/591b/f33714478b20a9a9897793f51e29ae75?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlXwf2d2r95QBvE0u8DUoJTnrMyC4cLfCyGB-74KQynl6MVAdo7cxPwT~jIAzK1BtzQptcRWKR3J23xRhYFlLAPK0VnaosQErt92fJfS4JEwbvVW7wg0qwhZBamrrLi044fjPZkrmGa2SczMMAxD4UA82TJIVCidPRhIGFCHAZKiSXcnF405BYqpn6EXRp8jOBQBTybU4QEIemQdV5-WhOZxOagT-JyEvtNKDoQj9FpV1igZJdwY07qf0OIF91XGu201wIA9~12mO~SSUe36tA-SchnGuQprAQkxw~YKaFUGAeGyzhuXGgKKlfadAkU7VM3GtH3KG5YlZYuGGqG74w__",
            title: "Nike Air Max 270 React",
            rat: 4.5,
            price: "$299,43"
        },
        {
            imageURL: "https://s3-alpha-sig.figma.com/img/73e1/591b/f33714478b20a9a9897793f51e29ae75?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlXwf2d2r95QBvE0u8DUoJTnrMyC4cLfCyGB-74KQynl6MVAdo7cxPwT~jIAzK1BtzQptcRWKR3J23xRhYFlLAPK0VnaosQErt92fJfS4JEwbvVW7wg0qwhZBamrrLi044fjPZkrmGa2SczMMAxD4UA82TJIVCidPRhIGFCHAZKiSXcnF405BYqpn6EXRp8jOBQBTybU4QEIemQdV5-WhOZxOagT-JyEvtNKDoQj9FpV1igZJdwY07qf0OIF91XGu201wIA9~12mO~SSUe36tA-SchnGuQprAQkxw~YKaFUGAeGyzhuXGgKKlfadAkU7VM3GtH3KG5YlZYuGGqG74w__",
            title: "Nike Air Max 270 React",
            rat: 4.5,
            price: "$299,43"
        },
        {
            imageURL: "https://s3-alpha-sig.figma.com/img/73e1/591b/f33714478b20a9a9897793f51e29ae75?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlXwf2d2r95QBvE0u8DUoJTnrMyC4cLfCyGB-74KQynl6MVAdo7cxPwT~jIAzK1BtzQptcRWKR3J23xRhYFlLAPK0VnaosQErt92fJfS4JEwbvVW7wg0qwhZBamrrLi044fjPZkrmGa2SczMMAxD4UA82TJIVCidPRhIGFCHAZKiSXcnF405BYqpn6EXRp8jOBQBTybU4QEIemQdV5-WhOZxOagT-JyEvtNKDoQj9FpV1igZJdwY07qf0OIF91XGu201wIA9~12mO~SSUe36tA-SchnGuQprAQkxw~YKaFUGAeGyzhuXGgKKlfadAkU7VM3GtH3KG5YlZYuGGqG74w__",
            title: "Nike Air Max 270 React",
            rat: 4.5,
            price: "$299,43"
        }

    ]

    return (
        <Container>
            <h1 className="font-bold text-center mt-[60px] text-[35px]">BEST SELLERS</h1>
            <div className="grid grid-cols-4 mt-[30px] gap-4 ">
                {items.map((item, index) => (
                    <CardItem {...item} key={index} />
                ))}
            </div>
            <div className="flex justify-center mt-[30px]">
                <Button type="link" className="text-[20px] underline underline-offset-4" >View All</Button>
            </div>
        </Container>
    )
}