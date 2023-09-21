// src/components/Category.js

import React from 'react';

const Category = ({ title, children }) => {
  return (
    <div  className="container">
      <h2>{title}</h2>
      <div className="category-content row">{children}</div>
    </div>
  );
};

export default Category;
