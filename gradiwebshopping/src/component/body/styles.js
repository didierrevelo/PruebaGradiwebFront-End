//stylesheet creator import
import { StyleSheet } from "aphrodite";

//responsive indicators
const screenSize = {
  small: "@media screen and (max-width: 700px)",
  big: "@media screen and (min-width: 1000px)",
  media: "@media screen and (max-width: 999px)",
};

//stylesheet
const styles = StyleSheet.create({
  container: {
    width: "70%",
    [screenSize.media]: {
      width: "100%",
    }
  },
  //title and subtitle
  title: { 
    marginTop: "10px",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "0.5rem",
    color: "#cdcdcd",
  },
  //product list
  containerPrice: {
    marginBottom: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    borderBottom: "1px solid #cdcdcd",
  },
  containerPrice2: {
    position: "relative",
    marginLeft: "100px",
  },
  price: {
    marginBottom: "0.5px",
    fontSize: "20.5px",
  },
  price2: {
    marginBottom: "0.5px",
    fontSize: "20.5px",
    margin: "10px 10px",
    [screenSize.media]: {
      margin: "10px 10px",
    },
    [screenSize.small]: {
      margin: "10px px",
    },
  },
  priceCompare: {
    marginLeft: "10px",
    fontSize: "20px",
    color: "#cdcdcd",
    textDecoration: "line-through",
  },
  //size
  containerSize: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    [screenSize.media]: {
      display: "inline-block",
      flexDirection: "row",
      justifyContent: "left",
    },
    [screenSize.small]: {
      display: "inline-block",
      flexDirection: "row",
      marginBottom: "10px",
      justifyContent: "left",
    },
  },
  // button
  containerButton: {
    marginBottom: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    borderBottom: "1px solid #cdcdcd",
    [screenSize.media]: {
      flexDirection: "column",
    },
    [screenSize.small]: {
      flexDirection: "column",
    },
  },
  containerSizeButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    [screenSize.media]: {
      display: "inline-block",
      flexDirection: "color",
      justifyContent: "left",
    },
    [screenSize.small]: {
      display: "inline-block",
      flexDirection: "column",
      marginBottom: "10px",
      justifyContent: "left",
    },
  },
  button: {
    margin: "10px 0px 10px 10px",
    width: "200px",
    padding: "10px",
    border: "1px solid #cdcdcd",
    borderRadius: "5px",
    background: "#f8f8f8",
    color: "#000000",
    fontSize: "1rem",
    fontWeight: "bold",
    [screenSize.media]: {
      margin: "10px 0px 0px 10px",
      width: "350px",
      padding: "10px",
      border: "1px solid #cdcdcd",
      borderRadius: "5px",
      background: "#f8f8f8",
      color: "#000000",
      fontSize: "1rem",
    },
    [screenSize.small]: {
      margin: "10px 0px 0px 10px",
    width: "350px",
    padding: "10px",
    border: "1px solid #cdcdcd",
    borderRadius: "5px",
    background: "#f8f8f8",
    color: "#000000",
    fontSize: "1rem",
      },
  },
  button2: {
    margin: "10px 0px 10px 10px",
    width: "200px",
    padding: "10px",
    border: "1px solid #cdcdcd",
    borderRadius: "5px",
    background: "#000000",
    color: "#fff",
    fontSize: "1rem",
    [screenSize.media]: {
      margin: "10px 0px 10px 10px",
    width: "350px",
    padding: "10px",
    border: "1px solid #cdcdcd",
    borderRadius: "5px",
    background: "#000000",
    color: "#fff",
    fontSize: "1rem",
    },
    [screenSize.small]: {
      margin: "10px 0px 10px 10px",
      width: "350px",
      padding: "10px",
      border: "1px solid #cdcdcd",
      borderRadius: "5px",
      background: "#000000",
      color: "#fff",
      fontSize: "1rem",
    },
  },
  //count
  containerCount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    [screenSize.media]: {
      display: "inline-block",
      flexDirection: "row",
      justifyContent: "left",
    },
    [screenSize.small]: {
      display: "inline-block",
      flexDirection: "row",
      marginBottom: "10px",
      justifyContent: "left",
    },
  },
  //modals
  containerModal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  containerModal2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "420px",
    height: "600px",
    background: "#fff",
    borderRadius: "5px",
    [screenSize.media]: {
      width: "420px",
      height: "600px",
    }
  },
})


export default styles;
