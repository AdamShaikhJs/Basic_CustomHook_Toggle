import React, { useState } from 'react';

const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue); //undefind means falsy value
  console.log(show);
  const toggle = () => {
    setShow(!show);
  };
  return { show, toggle };
};

export default useToggle;
