import React, { useState } from "react";
import SweetPagination from "sweetpagination";
import ItemCard from "../ItemCard/ItemCard";
import PropTypes from "prop-types";
import "./styles.css";

const PaginatedItems = ({ items, onItemPress }) => {
  const [currentPageData, setCurrentPageData] = useState(new Array(2).fill());
  return (
    <div className="paginate-main-wrapper">
      {currentPageData.map((item, index) => (
        <ItemCard
          itemData={item}
          key={index}
          onClickHandler={(id) => onItemPress(id)}
        />
      ))}
      <div className="paginate-wrapper">
        <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={4}
          getData={items}
          navigation={true}
        />
      </div>
    </div>
  );
};

PaginatedItems.defaultProps = {
  items: PropTypes.array.isRequired,
  onItemPress: PropTypes.func.isRequired,
};

export default PaginatedItems;
