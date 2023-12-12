import { motion, AnimatePresence } from "framer-motion";
import carouselData from "./carouselData";
import { useState } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import Container from "../atomic/atoms/Container";



export function CarouselCustomNavigation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isNextSlide, setIsNextSlide] = useState(false)
  const navigate = useNavigate()

  //move to next slide
  const nextSlide = () => {

    if (currentSlide === carouselData.length - 1) {
      //if its the last slide and not clicked before, set the state
      if (!isNextSlide) {
        setIsNextSlide(true);
      } else {
        navigate('/sign-up');
      }
    } else {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  return (
    <Container variant="contain">
      <main className="carousel-container relative h-[100%]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentSlide}
            className="carousel-slide text-black text-100px"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Container variant="flexed">
              <div className="md:w-[600px] md:h-fit md:mt-0">
                {" "}
                <img
                  className="w-[100%] h-[100%] object-contain"
                  src={carouselData[currentSlide].content.img}
                  alt="carousel"
                />{" "}
              </div>
              <div className={`md:mt-0 sm:mt-[20%]  ${carouselData[currentSlide === 1] ? "mt-[10%]" : "mt-[40%]"}`}>
                <p className="lg:text-[65px] md:text-[45px] sm:text-[40px] text-[30px] font-bold">{carouselData[currentSlide].content.text.header}</p>
                <p className="lg:text-[40px] md:text-[30px] sm:text-[25px] text-[23px] text-blackPrimary">{carouselData[currentSlide].content.text.subheader}</p>
              </div>
            </Container>
          </motion.div>
        </AnimatePresence>

        {/* indicator */}
        <section className="absolute bottom-0 flex items-center justify-between w-[100%]">
          <div className="indicators-container flex content-center">
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
        </section>
      </main>
    </Container>
  );
}
