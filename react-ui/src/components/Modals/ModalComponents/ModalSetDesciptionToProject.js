import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isModalSetDescriptionToProject,
  isModal,
} from "../../../redux/modals/modalSelectors";
import { closeModalSetDescriptionToProject } from "../../../redux/modals/modalActions";

import ModalPortal from "../../../common/ModalPortal";
import Modal from "../Modal";
import SetDescriptionToProject from "../ModalElements/SetDescriptionToProject";

export default function ModalSetDescriptionToProject() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModal);
  const isModalOpen_SetDescriptionToProject = useSelector(
    isModalSetDescriptionToProject
  );

  if (isModalOpen && !isModalOpen_SetDescriptionToProject) return null;

  const closeModal = () => dispatch(closeModalSetDescriptionToProject());

  return isModalOpen_SetDescriptionToProject ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        <SetDescriptionToProject onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}
