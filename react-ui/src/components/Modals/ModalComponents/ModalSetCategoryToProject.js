import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isModalSetCategoryToProject,
  isModal,
} from "../../../redux/modals/modalSelectors";
import { closeModalSetCategoryToProject } from "../../../redux/modals/modalActions";

import ModalPortal from "../../../common/ModalPortal";
import Modal from "../Modal";
import SetCategoryToProject from "../ModalElements/SetCategoryToProject";

export default function ModalSetCategoryToProject() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModal);
  const isModalOpen_SetCategoryToProject = useSelector(
    isModalSetCategoryToProject
  );

  if (isModalOpen && !isModalOpen_SetCategoryToProject) return null;

  const closeModal = () => dispatch(closeModalSetCategoryToProject());

  return isModalOpen_SetCategoryToProject ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        <SetCategoryToProject onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}
