import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../../node_modules/swiper/swiper.min.css";
import styles from "./swiper.module.css";

import { getImagesOfCurrentProject } from "../../redux/projects/projectSelectors";
import { isModalSwiper } from "../../redux/modals/modalSelectors";

export default () => {
  const images = useSelector(getImagesOfCurrentProject);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={(swiper) => console.log(swiper.activeIndex)}
      onSwiper={(swiper) => swiper.slideTo(2)}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <img src={image.mediaLink} alt={image.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
