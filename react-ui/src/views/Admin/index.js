import React, { useEffect } from "react";
import { useDispatch } from "react-redux";


import { getAllProjects } from "../../redux/projects/projectOperations";

import AdminLayout from "../../components/Layouts/AdminLayout";

export default function Admin() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, []);

  return (
    <AdminLayout>
      <div>
        <h2>Main menu admin page</h2>
      </div>
    </AdminLayout>
  );
}
