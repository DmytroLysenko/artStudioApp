import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isModalSetProjectName,
  isModal,
} from "../../../redux/modals/modalSelectors";
import { closeModalSetProjectName } from "../../../redux/modals/modalActions";

import ModalPortal from "../../../common/ModalPortal";
import Modal from "../Modal";
import SetProjectName from "../ModalElements/SetProjectName";

export default function ModalSetProjectName() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModal);
  const isModalOpen_SetProjectName = useSelector(isModalSetProjectName);

  if (isModalOpen && !isModalOpen_SetProjectName) return null;

  const closeModal = () => dispatch(closeModalSetProjectName());

  return isModalOpen_SetProjectName ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        <SetProjectName onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}
