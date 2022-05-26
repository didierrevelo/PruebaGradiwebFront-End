// react import to handle proper jsx handling
import { Component } from 'react';
/* It is the function that saves and exports 
the API url in different components¨*/
import productsUrl from '../../functions/global';

// displays the page title
class HeaderRender extends Component {
  constructor (props) {
    super(props);
    this.state = {
      headerItem: [],
    };
  }
  componentDidMount () {
    fetch(productsUrl.productsUrl())
    .then(response => response.json())
    .then(data => this.setState({ headerItem: data}));
  }
  render () {
    const HeaderS = this.state.headerItem.title;
    return (
      <div>
      {HeaderS}
      </div>
    );
  }
}


export default HeaderRender;
