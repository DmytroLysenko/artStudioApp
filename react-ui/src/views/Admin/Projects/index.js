import React from "react";

import AdminLayout from "../../../components/Layouts/AdminLayout";
import ProjectsTable from "../../../components/ProjectsTable";

export default function Projects() {
  return (
    <AdminLayout>
      <ProjectsTable />
    </AdminLayout>
  );
}
