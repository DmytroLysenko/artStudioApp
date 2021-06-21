import React from "react";
import { useParams } from "react-router-dom";

import AdminLayout from "../../../components/Layouts/AdminLayout";
import ProjectDetails from "../../../components/ProjectDetails";

export default function ProjectDetailsView() {
  const { projectId } = useParams();

  return (
    <AdminLayout>
      <ProjectDetails projectId={projectId}  />
    </AdminLayout>
  );
}
