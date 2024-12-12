import { Container } from "./container";
import { Menu } from "antd";
import {ReactComponent as Logo} from "../assets/Icon.svg"

export const SubHeader = () => {
    return (
    <div>
        <Container className="flex justify-between items-center py-3">
            <div className="flex gap-3 items-center">
                <Logo width={40} />
                <p className="font-bold ">
                    E-COMMERCE
                </p>
            </div>
            <Menu
                mode="horizontal"
                className="w-[400px] flex justify-between items-center"
                defaultSelectedKeys={['1']}
                items={[
                    { key: '/', label: 'HOME' },
                    { key: '/about', label: 'SNEAKERS' },
                    { key: '/contact', label: 'CONTACTS' },
                ]}
                />
        </Container>
        <hr />
    </div>
    )
}