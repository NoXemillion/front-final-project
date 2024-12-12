import { ReactComponent as Shipping } from "../assets/whyus/shipping.svg";
import { ReactComponent as Refund } from "../assets/whyus/refund.svg";
import { ReactComponent as Support } from "../assets/whyus/support.svg";
import { Container } from "./";

const whyUsData = [
  {
    Icon: Shipping,
    title: "FREE SHIPPING",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    Icon: Refund,
    title: "100% REFUND",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    Icon: Support,
    title: "SUPPORT 24/7",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const WhyUs = () => {
  return (
    <Container className="flex gap-3 mt-[100px] justify-between">
      {whyUsData.map(({ Icon, title, description }, index) => (
        <div key={index} className="text-center flex flex-col justify-center  items-center gap-4 w-[200px]">
          <Icon className="mb-[20px]" />
          <p className="font-bold text-[27px]">{title}</p>
          <span className=" text-gray-600 text-[18px]">{description}</span>
        </div>
      ))}
    </Container>
  );
};
