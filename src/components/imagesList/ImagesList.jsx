import React, { useState } from "react";
import style from "./imagesList.module.css";

const ImagesList = ({ photos }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className={style.images_list}>
      <div className={style.images_list__content}>
        <ul className={style.images_list__photos}>
          {error && <h3>Ошибка...</h3>}
          {!isLoading &&
            photos.map((item) => {
              return (
                <li className={style.images_list__item}>
                  <img src={item.photo} alt={item.name} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default ImagesList;
