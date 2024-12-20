import { Container } from "./container";
import { Menu } from "antd";
import { ReactComponent as Logo } from "../assets/Icon.svg";
import { Link, useLocation } from "react-router-dom";

export const SubHeader = () => {
    const location = useLocation(); 

    return (
        <div>
            <Container className="flex justify-between items-center py-3">
               <Link to={'/'}>
                <div className="flex gap-3 items-center">
                        <Logo width={40} />
                        <p className="font-bold">E-COMMERCE</p>
                    </div>
                </Link>
                <Menu
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    className="w-[400px] flex justify-between items-center"
                    items={[
                        { key: '/', label: <Link to="/">HOME</Link> },
                        { key: '/shop', label: <Link to="/shop">SHOP</Link> },
                        { key: '/contact', label: <Link to="/contact">CONTACTS</Link> },
                    ]}
                />
            </Container>
            <hr />
        </div>
    );
};
