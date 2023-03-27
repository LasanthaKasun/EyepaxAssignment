import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const ItemCard = ({ itemData, onClickHandler }) => {
  return (
    <div className="item-wrapper" onClick={() => onClickHandler(itemData?.id)}>
      <div>
        ID : <span>{itemData?.id}</span>
      </div>
      <div>
        User ID : <span>{itemData?.userId}</span>
      </div>
      <div>
        Title : <span>{itemData?.title}</span>
      </div>
      <div>
        Completed : <span>{itemData?.completed ? "TRUE" : "FALSE"}</span>
      </div>
    </div>
  );
};

ItemCard.defaultProps = {
  itemData: PropTypes.object.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default ItemCard;
