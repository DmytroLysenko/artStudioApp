import React from "react";

export default function Project(props) {

  return <h1>One Project with id: {props.match.params.projectId}</h1>;
}
