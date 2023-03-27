import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const Model = ({ data, handleClose }) => {
  return (
    <div className="model-wrapper">
      <div className="model-iinner">
        <div className="model-close" onClick={() => handleClose()}>
          Close
        </div>
        <div className="model-body">
          <div>
            ID : <span>{data?.id}</span>
          </div>
          <div>
            User ID : <span>{data?.userId}</span>
          </div>
          <div>
            Title : <span>{data?.title}</span>
          </div>
          <div>
            Completed : <span>{data?.completed ? "TRUE" : "FALSE"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

Model.defaultProps = {
  data: PropTypes.object.isRequired,
};

export default Model;
