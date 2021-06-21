import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  isModalCreateProject,
  isModal,
} from "../../../redux/modals/modalSelectors";
import { closeModalCreateProject } from "../../../redux/modals/modalActions";

import ModalPortal from "../../../common/ModalPortal";
import Modal from "../Modal";
import CreateProject from "../ModalElements/CreateProject";

export default function ModalCreateProject() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isModal);
  const isModalOpen_CreateProject = useSelector(isModalCreateProject);

  // TODO: Логика невозможности открытия двух модалок

  if (isModalOpen && !isModalOpen_CreateProject) return null;

  const closeModal = () => dispatch(closeModalCreateProject());

  return isModalOpen_CreateProject ? (
    <ModalPortal>
      <Modal onClose={closeModal}>
        <CreateProject onClose={closeModal} />
      </Modal>
    </ModalPortal>
  ) : null;
}
