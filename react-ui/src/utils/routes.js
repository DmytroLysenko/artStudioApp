import { lazy } from "react";

const config = [
  {
    path: "/",
    label: "Projects",
    exact: true,
    component: lazy(() =>
      import("../views/Projects" /* webpackChunkName: "projects" */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: "/projects/:projectId",
    label: "Project",
    exact: true,
    component: lazy(() =>
      import("../views/Project" /* webpackChunkName: "project" */)
    ),
    private: false,
    restricted: false,
  },
  {
    path: "/admin/login",
    label: "Login",
    exact: true,
    component: lazy(() =>
      import("../views/Admin/Login" /* webpackChunkName: "login" */)
    ),
    private: false,
    restricted: true,
  },
  {
    path: "/admin",
    label: "Menu",
    exact: true,
    component: lazy(() =>
      import("../views/Admin" /* webpackChunkName: "adminMenu" */)
    ),
    private: true,
    restricted: false,
  },
  {
    path: "/admin/settings",
    label: "Settings",
    exact: true,
    component: lazy(() =>
      import("../views/Admin/Settings" /* webpackChunkName: "adminSettings" */)
    ),
    private: true,
    restricted: false,
  },
  {
    path: "/admin/projects",
    label: "AdminProjects",
    exact: true,
    component: lazy(() =>
      import("../views/Admin/Projects" /* webpackChunkName: "adminProjects" */)
    ),
    private: true,
    restricted: false,
  },
  {
    path: "/admin/projects/:projectId",
    label: "AdminProjectById",
    exact: true,
    component: lazy(() =>
      import(
        "../views/Admin/ProjectDetails" /* webpackChunkName: "adminProjectById" */
      )
    ),
    private: true,
    restricted: false,
  },
];

export default config;
