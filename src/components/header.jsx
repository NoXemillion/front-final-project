import { Container } from "./container";
import { Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const Header = () => {
    return (
        <div className="bg-white z-50 sticky top-0">
            <Container className={"flex justify-end items-center py-3"} >
            <div className="flex gap-3">
                {localStorage.getItem("token") ? (
                    <Button type="primary" href="/profile">Profile</Button>
                ) : (
                    <Button type="primary" href="/login">Login</Button>
                )}
                <Button icon={<ShoppingCartOutlined />} >Items</Button>
            </div>
            </Container>
           <hr />
        </div>
    )
}