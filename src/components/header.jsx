import { Container } from "./container";
import { Select, Button } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const Header = () => {
    return (
        <div className="bg-white z-50 sticky top-0">
            <Container className={"flex justify-between items-center py-3"} >
            <div className="flex  gap-3">
                <Select defaultValue="EN" bordered={false} >
                        <Select.Option value="EN">EN</Select.Option>
                        <Select.Option value="RU">RU</Select.Option>
                        <Select.Option value="KZ">KZ</Select.Option>
                </Select>
                <Select defaultValue={"USD"} bordered={false}>
                        <Select.Option value="USD">USD</Select.Option>
                        <Select.Option value="KZT">KZT</Select.Option>
                        <Select.Option value="RUB">RUB</Select.Option>
                </Select>
            </div>
            <div className="flex gap-3">
                <Button type="primary" >Login</Button>
                <Button icon={<ShoppingCartOutlined />} >Items</Button>
            </div>
            </Container>
           <hr />
        </div>
    )
}