import React from "react";

const ImageThubnail = props => {
  const { item } = props;
  return (
    <img src={item.img_url} className="img-fluid product-img" alt={item.name} />
  );
};

export default ImageThubnail;
