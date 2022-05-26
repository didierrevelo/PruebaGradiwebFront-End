// react import to handle proper jsx handling
import React from 'react';

/* This function retrieves the product size from the API. */
function widthSelectFunct2(widthSelectNumber) {
  const widthSelect2 = [];
    const widthSelect = [];
    // eslint-disable-next-line
    widthSelectNumber?.forEach(function (width, index, array) {
      if (index === 1) {
        widthSelect.push(
          // eslint-disable-next-line
          <div>{array[index].values.map((width, index) => {
            return (
              widthSelect2.push(
                width
              )
            )
          })}</div>

        );
      } else {
        return;
      }
    }); 

  return widthSelect2;
}


export default widthSelectFunct2;
