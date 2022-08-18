import React from "react";
import style from './style.module.scss';
function Box({ type, ...props }) {

  return <>
    <button className={style.box} {...props}>
      {type}
    </button>
  </>;

}

export default Box;
