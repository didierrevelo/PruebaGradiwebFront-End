// react import to handle proper jsx handling
import React from 'react'

/* This function retrieves the product colors from the API. */
function widthSelectFunct(widthSelectNumber) {
  const widthSelect4 = []
  const widthSelect3 = [];
  // eslint-disable-next-line
  widthSelectNumber?.forEach(function (width, index, array) {
    if (index === 0) {
      widthSelect3.push(
        // eslint-disable-next-line
        <>{array[index].values.map((width, index) => {
          return (
            widthSelect4.push(
              width
            )
          )
        })}</>

      );
    } else {
      return;
    }
  });
  return widthSelect4; 
}


export default widthSelectFunct;
