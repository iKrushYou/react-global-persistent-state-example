import React, { useContext } from "react";
import { InfoContext } from "./InfoContext";

const styles = {
  infoPanel: { borderStyle: "solid", padding: 8 }
};

const EditDetails = () => {
  const { info, setInfo } = useContext(InfoContext);

  const handleChange = key => event => {
    setInfo({ [key]: event.target.value });
  };

  return (
    <React.Fragment>
      <h1>Edit Details</h1>
      <div style={styles.infoPanel}>
        <p>
          Name <input value={info.name} onChange={handleChange("name")} />
        </p>
        <p>
          Age <input value={info.age} onChange={handleChange("age")} />
        </p>
        <p>
          Email <input value={info.email} onChange={handleChange("email")} />
        </p>
      </div>
    </React.Fragment>
  );
};

export default EditDetails;
