import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Redirect, BrowserRouter } from "react-router-dom";

import routes from "../utils/routes";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";

import { getCurrentUser } from "../redux/auth/authOperations";
import { getAllTags } from "../redux/tags/tagOperations";
import { getAllCategories } from "../redux/categories/categoriesOperations";
// import {
//   getAllProjects,
//   getPublishedProjects,
// } from "../redux/projects/projectOperations";
// import { isAuthentificated } from "../redux/auth/authSelectors";

import ModalCreateProject from "./Modals/ModalComponents/ModalCreateProject";
import ModalAddImagesToProject from "./Modals/ModalComponents/ModalAddImagesToProject";
import ModalSetTagsToProject from "./Modals/ModalComponents/ModalSetTagsToProject";
import ModalSetDescriptionToProject from "./Modals/ModalComponents/ModalSetDesciptionToProject";
import ModalSetCategoryToProject from "./Modals/ModalComponents/ModalSetCategoryToProject";
import ModalSetProjectName from "./Modals/ModalComponents/ModalSetProjectName";
import ModalSwiper from "./Modals/ModalComponents/ModalSwiper";

function App() {
  const dispatch = useDispatch();

  // const isAuth = useSelector(isAuthentificated);

  useEffect(() => {
    dispatch(getCurrentUser());
    dispatch(getAllTags());
    dispatch(getAllCategories());
    // if (isAuth) {
    //   dispatch(getAllProjects());
    // } else {
    //   dispatch(getPublishedProjects());
    // }
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            {routes.map((route) =>
              route.private ? (
                <PrivateRoute key={route.path} {...route} />
              ) : (
                <PublicRoute key={route.path} {...route} />
              )
            )}
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>

      <ModalCreateProject />
      <ModalAddImagesToProject />
      <ModalSetTagsToProject />
      <ModalSetDescriptionToProject />
      <ModalSetCategoryToProject />
      <ModalSetProjectName />
      <ModalSwiper />
    </>
  );
}

export default App;
