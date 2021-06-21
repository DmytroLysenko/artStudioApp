import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import PublicLayout from "../../components/Layouts/PublicLayout";
import WellcomePage from "../../components/WellcomePage";
import PublishedProjects from "../../components/PublishedProjects";

import { getPublishedProjects } from "../../redux/projects/projectOperations";

export default function Projects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPublishedProjects());
  }, [dispatch]);

  return (
    <PublicLayout>
      <WellcomePage />
      <PublishedProjects />
    </PublicLayout>
  );
}
