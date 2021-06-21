import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createNewProject } from "../../../../redux/projects/projectOperations";
import { getAllSelectedTags } from "../../../../redux/tags/tagSelectors";

// import Tags from "../../../Tags";

export default function CreateProject() {
  const dispatch = useDispatch();
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [files, setFiles] = useState([]);
  const selectedTags = useSelector(getAllSelectedTags);

  const handleSubmit = (e) => {
    e.preventDefault();

    const projectData = {
      name,
      description,
      startDate,
      finishDate,
      tags: selectedTags,
      files,
    };

    const failMessage = checkProjectData(projectData);

    if (failMessage) {
      alert(failMessage);
      return;
    }

    dispatch(createNewProject(projectData));
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Create new project</h2>
      <label>
        Name
        <input
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Start date
        <input
          name="startDate"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Finish date
        <input
          name="finishDate"
          type="date"
          value={finishDate}
          onChange={(e) => setFinishDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Description
        <textarea
          name="description"
          rows="5"
          cols="33"
          placeholder="Enter description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ resize: "none" }}
        ></textarea>
      </label>
      {/* <Tags /> */}
      <div>
        <h3>Images</h3>
        <input
          name="files"
          type="file"
          multiple
          onChange={(e) => setFiles(Object.values(e.target.files))}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
}
// TODO: Complite validation function
function checkProjectData(data) {
  const { name, startDate, tags } = data;

  if (!name) return "Enter name of project";
  if (!startDate) return "Enter start date of project";
  if (tags.lengs === 0) return "Select or add tags of project";

  return false;
}
