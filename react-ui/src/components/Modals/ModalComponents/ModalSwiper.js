import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { isModalSwiper, isModal } from "../../../redux/modals/modalSelectors";
import { closeModalSwiper } from "../../../redux/modals/modalActions";

import ModalPortal from "../../../common/ModalPortal";
import Modal from "../Modal";
import Swiper from "../ModalElements/Swiper";

export default function ModalSwiper() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModal);
  const isModalOpen_Swiper = useSelector(isModalSwiper);

  // TODO: Логика невозможности открытия двух модалок

  if (isModalOpen && !isModalOpen_Swiper) return null;

  const closeModal = () => dispatch(closeModalSwiper());

  return isModalOpen_Swiper ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        <Swiper onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}
