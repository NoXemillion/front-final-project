import { Carousel } from "antd";

const images = [
  "/carousel/1.png",
  "/carousel/2.png",
  "/carousel/3.png",
];

export const MyCarousel = () => {
  return (
    <Carousel autoplay className="w-full bg-slate-400">
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Image ${index}`}
            className="w-full object-cover h-[600px]"
          />
        </div>
      ))}
    </Carousel>
  );
};