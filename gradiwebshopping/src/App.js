// react import to handle proper jsx handling
import React, { Component } from 'react';
// css-styles
import { css } from "aphrodite"; 
import styles from './styles';
// Renders of every parts of the app
import ImagesRender from './component/images';
import HeaderRender from './component/header';
import BodyRender from './component/body';


let windowWidth = window.innerWidth;

// Main element that renders the entire app.
class App extends Component {
  render () {
    return (
      <div>
        <div className={css(styles.container)}>
          <div className={css(styles.header)}>
            <HeaderRender />
          </div>
        </div>
        <div className={css(styles.bodyContainer)}>
          <ImagesRender index={1} showThumbs={windowWidth>600?true:false}/>
          <div className={css(styles.body)}>
          <BodyRender />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
