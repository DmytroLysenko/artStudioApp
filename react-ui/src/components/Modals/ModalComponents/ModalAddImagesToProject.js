import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isModalAddImagesToProject,
  isModal,
} from "../../../redux/modals/modalSelectors";
import { closeModalAddImagesToProject } from "../../../redux/modals/modalActions";

import ModalPortal from "../../../common/ModalPortal";
import Modal from "../Modal";
import AddImagesToProject from "../ModalElements/AddImagesToProject";

export default function ModalAddImagesToProject() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModal);
  const isModalOpen_AddImagesToProject = useSelector(isModalAddImagesToProject);

  if (isModalOpen && !isModalOpen_AddImagesToProject) return null;

  const closeModal = () => dispatch(closeModalAddImagesToProject());

  return isModalOpen_AddImagesToProject ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        <AddImagesToProject onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}
