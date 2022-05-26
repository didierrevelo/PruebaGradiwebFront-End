// react import to handle proper jsx handling
import React, { Component } from 'react';
/* It is the function that saves and exports 
the API url in different components¨*/
import productsUrl from '../../functions/global';
// imports the component for the creation of the photo carousel.
import { Carousel } from 'react-responsive-carousel';
// photo carousel styles
import "react-responsive-carousel/lib/styles/carousel.min.css";


/* ImagesRender creates a carousel of photos
that presents the images that the API contains,
they are rendered by this component to show them
in an organized and simple way in each of the
responsive states*/
class ImagesRender extends Component {
  constructor (props) {
    super(props);
    this.state = {
      products: [],
      headerItem: [],
    };
  }
  /* Mount method, which only runs on the client side.
  Occurs immediately after the first render.
  Once this method is invoked, the elements associated
  with the component are already available in the DOM,
  I use it to fetch the information from the api with a
  fetch function.*/
  componentDidMount () {
    fetch(productsUrl.productsUrl())
    .then(response => response.json())
    .then(data => this.setState({ products: data}));
  }
  render () {
    /* functions that allow to obtain the color
    and size of the shoe from the api */
    const images = this.state.products.images;;
    const items = [];
    // eslint-disable-next-line 
      images?.map((image, index) => {
        items.push(
          // eslint-disable-next-line
              <img  key={index} src={image} className={this.props.className}/>
        );
      })  
    return (
        <Carousel
          width= {this.props.width}
          showThumbs={this.props.showThumbs}
        >
          {items}
        </Carousel>
    );
  }
}

export default ImagesRender;
