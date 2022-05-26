// react import to handle proper jsx handling
import { Component } from 'react';
/* It is the function that saves and exports 
the API url in different components¨*/
import productsUrl from '../../functions/global';
// Provides the styles of different components.
import styles from './styles';
// Help so that styles that are not written in css are used as such
import { css } from 'aphrodite';
// css-styles
import './styles.css'
// Different functions that consume the API are imported
import widthSelectFunct from '../../functions/widthSelect';
import widthSelectFunct2 from '../../functions/widthSelect2';
import descriptionSelect from '../../functions/descriptionSelect';
// Import from popup/modal
import Modals from '../modals/modals';

/*
BodyRender is one of the main components of the
application, since it shows all the information
of the page and its products
*/


class BodyRender extends Component {
  constructor(props) {
    super(props);
    this.sumMax = this.sumMax.bind(this);
    this.sumMin = this.sumMin.bind(this);
    this.state = {
      /*API consumption states*/
      bodyItem: [],
      num: 0,
      /* checkbox states */
      checkboxes: {
        red: false,
        black: false,
        selected: null,
      },
      checkboxes2: {
        seven: false,
        sevenDot: false,
        eight: false,
        eightDot: false,
        nine: false,
        nineDot: false,
        ten: false,
        tenDot: false,
        eleven: false,
        elevenDot: false,
        selected: null,
      }
    };
  }
  /*methods that handle the states of the input
  that provides the client with the possibility
  to choose the quantity of the product*/

  //increase button handling
  sumMax() {
    this.setState({ num: this.state.num + 1 });
  };
  //decrement button handling
  sumMin() {
    if (this.state.num > 0) {
    this.setState({ num: this.state.num - 1 });
    }
  };
  /* Mount method, which only runs on the client side.
  Occurs immediately after the first render.
  Once this method is invoked, the elements associated
  with the component are already available in the DOM,
  I use it to fetch the information from the api with a
  fetch function.*/
  componentDidMount() {
    fetch(productsUrl.productsUrl())
      .then(response => response.json())
      .then(data => this.setState({ bodyItem: data }));
  }
  /*onCheck handles getting states and references from
    input-checkbox that we use to take the preferences
    of the client*/
  onCheck(name, val) {
    const checkboxes = Object.assign({},this.state.checkboxes, {});
    for (let key in checkboxes) {
      checkboxes[key] = false;
    }
    checkboxes[name] = true;
    checkboxes.selected = val;
    this.setState({ checkboxes });
  }
  onCheck2(name, val) {
    const checkboxes2 = Object.assign({},this.state.checkboxes2, {});
    for (let key in checkboxes2) {
      checkboxes2[key] = false;
    }
    checkboxes2[name] = true;
    checkboxes2.selected = val;
    this.setState({ checkboxes2 });
  }
  render() {
    // entry point variables to API information
    const images = this.state.bodyItem.images;
    const TitleBody = this.state.bodyItem.title;
    const SubtitleBodyPrice = this.state.bodyItem.price;
    const SubtitleBodyComparePrice = this.state.bodyItem.compare_at_price;
    const colorSelectName = this.state.bodyItem.options;
    const DescriptionBody = this.state.bodyItem.description;
    const widthSelectNumber = this.state.bodyItem.options;
    // function that transforms the figures into dollar currency format
    let formatterUSA = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
    /* functions that allow to obtain the color
    and size of the shoe from the api */
    const colorSelect = [];
    // eslint-disable-next-line
    colorSelectName?.map((color) => {
      colorSelect.push(
        // eslint-disable-next-line
        <>{color.name}</>
      );
    })
    const items = [];
    // eslint-disable-next-line 
      images?.map((image, index) => {
        items.push(
          // eslint-disable-next-line
              <img  key={index} src={image} className={this.props.className}/>
        );
      })  
    return (
      <div className={css(styles.container)}>
         {/*<!-- title --> */} 
        <div >
          <h3 className={css(styles.subtitle)}>
            by Nike x ALYX
          </h3>
        </div>
        <div className={css(styles.title)}>
          {TitleBody}
        </div>
        {/*<!-- title end --> */} 
        {/*<!-- price --> */} 
        <div className={css(styles.containerPrice)}>
          <div>
            <p className={css(styles.price)}>{formatterUSA.format(SubtitleBodyPrice / 100)} </p>
          </div>
          <div>
            <p className={css(styles.priceCompare)}>{formatterUSA.format(SubtitleBodyComparePrice / 100)}</p>
          </div>
        </div>
        {/*<!-- price end --> */}
        {/*<!-- color --> */}
        <div>
          <div className={css(styles.containerPrice)}>
            <div>
              <p>{colorSelect[0]}</p>
            </div>
            <div className="round">
              <input 
              type="checkbox" 
              id="checkbox" 
              value={widthSelectFunct[0]} 
              checked={this.state.checkboxes.red}
              onChange={() => this.onCheck('red', widthSelectFunct(widthSelectNumber)[0])}
              />
              <label htmlFor="checkbox" />
            </div>
            {/* <label>{this.state.checkboxes.selected}</label> */}
            <div className="r">
              <input 
              type="checkbox" 
              id="checkbox2" 
              value={widthSelectFunct[1]}
              checked={this.state.checkboxes.black}
              onChange={() => this.onCheck('black', widthSelectFunct(widthSelectNumber)[1])}
              />
              <label htmlFor="checkbox2"></label>
            </div>
          </div>
        </div>
        {/*<!-- color end --> */}
        {/*<!-- size --> */}
        <div className={css(styles.containerPrice)}>
        <div className={css(styles.containerSize)}>
          <div>
              <p>{colorSelect[1]}</p>
            </div>
            <li>
              <div className="width">
                <input 
                type="checkbox" 
                id="checkbox3"
                value={widthSelectFunct2(widthSelectNumber)[0]}
                checked={this.state.checkboxes2.seven}
                onChange={() => this.onCheck2('seven', widthSelectFunct2(widthSelectNumber)[0])}
                />
                <label htmlFor="checkbox3">{widthSelectFunct2(widthSelectNumber)[0]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox4"
                value={widthSelectFunct2(widthSelectNumber)[1]}
                checked={this.state.checkboxes2.sevenDot}
                onChange={() => this.onCheck2('sevenDot', widthSelectFunct2(widthSelectNumber)[1])}
                />
                <label htmlFor="checkbox4">{widthSelectFunct2(widthSelectNumber)[1]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox5"
                value={widthSelectFunct2(widthSelectNumber)[2]}
                checked={this.state.checkboxes2.eight}
                onChange={() => this.onCheck2('eight', widthSelectFunct2(widthSelectNumber)[2])}
                />
                <label htmlFor="checkbox5">{widthSelectFunct2(widthSelectNumber)[2]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox6"
                value={widthSelectFunct2(widthSelectNumber)[3]}
                checked={this.state.checkboxes2.eightDot}
                onChange={() => this.onCheck2('eightDot', widthSelectFunct2(widthSelectNumber)[3])}
                />
                <label htmlFor="checkbox6">{widthSelectFunct2(widthSelectNumber)[3]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox7"
                value={widthSelectFunct2(widthSelectNumber)[4]}
                checked={this.state.checkboxes2.nine}
                onChange={() => this.onCheck2('nine', widthSelectFunct2(widthSelectNumber)[4])}
                />
                <label htmlFor="checkbox7">{widthSelectFunct2(widthSelectNumber)[4]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox8"
                value={widthSelectFunct2(widthSelectNumber)[5]}
                checked={this.state.checkboxes2.nineDot}
                onChange={() => this.onCheck2('nineDot', widthSelectFunct2(widthSelectNumber)[5])}
                />
                <label htmlFor="checkbox8">{widthSelectFunct2(widthSelectNumber)[5]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox9"
                value={widthSelectFunct2(widthSelectNumber)[6]}
                checked={this.state.checkboxes2.ten}
                onChange={() => this.onCheck2('ten', widthSelectFunct2(widthSelectNumber)[6])}
                />
                <label htmlFor="checkbox9">{widthSelectFunct2(widthSelectNumber)[6]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox10"
                value={widthSelectFunct2(widthSelectNumber)[7]}
                checked={this.state.checkboxes2.tenDot}
                onChange={() => this.onCheck2('tenDot', widthSelectFunct2(widthSelectNumber)[7])}
                />
                <label htmlFor="checkbox10">{widthSelectFunct2(widthSelectNumber)[7]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox11"
                value={widthSelectFunct2(widthSelectNumber)[8]}
                checked={this.state.checkboxes2.eleven}
                onChange={() => this.onCheck2('eleven', widthSelectFunct2(widthSelectNumber)[8])}
                />
                <label htmlFor="checkbox11">{widthSelectFunct2(widthSelectNumber)[8]}</label>
              </div>
            </li>
            <li>
              <div className="width">
                <input
                type="checkbox"
                id="checkbox12"
                value={widthSelectFunct2(widthSelectNumber)[9]}
                checked={this.state.checkboxes2.elevenDot}
                onChange={() => this.onCheck2('elevenDot', widthSelectFunct2(widthSelectNumber)[9])}
                />
                <label htmlFor="checkbox12">{widthSelectFunct2(widthSelectNumber)[9]}</label>
              </div>
              {/* <label>{this.state.checkboxes2.selected}</label> */}
            </li>
          </div>
        </div>
        {/*<!-- size end --> */}
        {/*<!-- amount and total --> */}
        <div className={css(styles.containerPrice)}>
          <div className={css(styles.containerSize)}>
            <li>
            <div className="num-block skin">
              <div className="num-in">
                <button className="minus dis" onClick={() => this.sumMin()}>-</button>
                <input type="text" className="in-num" value={this.state.num} readOnly />
                <button className="plus" onClick={() => this.sumMax()}>+</button>
              </div>
            </div>
            {/* <lebel>{this.state.num}</lebel> */}
            </li>
          </div>
          <li>
          <div className={css(styles.containerPrice2)}>
            <p className={css(styles.price2)}>Total Price: {formatterUSA.format(SubtitleBodyPrice / 100 * this.state.num)} </p>
          </div>
          </li>
        </div>
        {/*<!-- amount and total end --> */}
        {/*<!-- modals and button --> */}
        <Modals>
          <div className={css(styles.containerModal)}>
            <div className={css(styles.containerModal2)}>
            <div >
          <h3 className={css(styles.subtitle)}>
            by Nike x ALYX
          </h3>
        </div>
        <div className={css(styles.title)}>
          {TitleBody}
        </div>
            <label>Color: {this.state.checkboxes.selected}</label>
            <label>Amount: {this.state.num}</label>
            <label>size: {this.state.checkboxes2.selected}</label>
            <label>Total Price: {formatterUSA.format(SubtitleBodyPrice / 100 * this.state.num)} </label>  
            {items[0]}
            <button type="button" className={css(styles.button2)} onClick={() => this.onClick()}>Add</button>
            </div>
          </div>
        </Modals>
        {/*<!-- modals and button end --> */}
        {/*<!-- description --> */}
        <div className={css(styles.containerPrice)}>
          <div className={css(styles.containerSize)}>
            <p>{descriptionSelect(DescriptionBody)}</p>
          </div>
        </div>
        {/*<!-- description end --> */}
      </div >
    );
  }
}


export default BodyRender;
