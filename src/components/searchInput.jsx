import { Input, Button } from "antd";

export const SearchInput = () => {
  return (
    <div className="flex justify-center items-center mt-[130px]">
      <Input
        placeholder="Search"
        className="w-[630px] h-[64px] rounded-none rounded-l-lg"
        style={{ borderRight: "none" }} // Убираем правую границу
      />
      <Button
        type="primary"
        className="h-[64px] rounded-none rounded-r-lg"
        style={{ borderLeft: "none" }} // Убираем левую границу
      >
        Search
      </Button>
    </div>
  );
};
