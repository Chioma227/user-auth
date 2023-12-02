import { motion, AnimatePresence } from "framer-motion";
import carouselData from "./carouselData";
import { useState } from "react";
import clsx from "clsx";
import Auth from "../../firebase.config";
import { Navigate } from "react-router-dom";
import Container from "../atomic/atoms/Container";

export function CarouselCustomNavigation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    console.log(currentSlide);
  };

  if (currentSlide ==2) {
    return <Navigate to="/sign-up" />
  }

  return (
    <Container variant="contain">
      <div className="carousel-container relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            className="carousel-slide text-black text-100px"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Container className="flex items-center h-fit gap-[30px]">
              <div className="w-[600px] h-[600px]">
                {" "}
                <img
                  className="w-[100%] h-[100%] object-contain"
                  src={carouselData[currentSlide].content.img}
                  alt="carousel"
                />{" "}
              </div>
              <div>
                <p className="txt-lg">{carouselData[currentSlide].content.text.header}</p>
                <p className="txt-md text-blackPrimary">{carouselData[currentSlide].content.text.subheader}</p>
              </div>
            </Container>
          </motion.div>
        </AnimatePresence>

        {/* indicator */}
        <div className="indicators-container flex content-center mt-[10px]">
          {carouselData.map((slide, index) => (
            <div
              key={slide.id}
              className={clsx(
                `${index === currentSlide ? "bg-redSecondary" : "bg-redPrimary"}`,
                "cursor-pointer w-[13px] h-[6px] rounded-[40%] ml-[3px] mr-[3px]"
              )}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <Container variant="flex-end">
          <button
            onClick={nextSlide}
            className="text-white font-extrabold rounded-[50%] bg-blackSecondary w-[50px] h-[50px] border-none"
          >
            &gt;
          </button>
        </Container>
      </div>
    </Container>
  );
}
