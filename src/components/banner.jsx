import React from "react";
import { Button } from "antd";
import { Container } from "./";
import { ReactComponent as BannerImg } from "../assets/banner-image.svg";

export const Banner = () => {
  return (
    <div className="bg-[#40BFFF] w-full h-[550px] mt-[100px]">
      <Container className={"flex justify-between"}>
        <div className="flex flex-col justify-center items-start">
          <p className="text-[55px] font-bold text-white w-[500px]">
            Adidas Men Running Sneakers
          </p>
          <span className="text-white text-[24px] font-semibold w-[550px]">
            Performance and design. Taken right to the edge.
          </span>
          <Button
            type="link"
            className="mt-5 text-[20px] text-white font-bold underline underline-offset-4  decoration-white "
            size="large"
            >
                SHOP NOW
        </Button>
        </div>
        <div className="relative -top-[90px]"> {/* Сдвиг изображения вверх */}
          <BannerImg />
        </div>
      </Container>
    </div>
  );
};
