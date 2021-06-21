import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isModalSetTagsToProject,
  isModal,
} from "../../../redux/modals/modalSelectors";
import { closeModalSetTagsToProject } from "../../../redux/modals/modalActions";

import ModalPortal from "../../../common/ModalPortal";
import Modal from "../Modal";
import SetTagsToProject from "../ModalElements/SetTagsToProject";

export default function ModalSetTagsToProject() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModal);
  const isModalOpen_SetTagsToProject = useSelector(isModalSetTagsToProject);

  if (isModalOpen && !isModalOpen_SetTagsToProject) return null;

  const closeModal = () => dispatch(closeModalSetTagsToProject());

  return isModalOpen_SetTagsToProject ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        <SetTagsToProject onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}
