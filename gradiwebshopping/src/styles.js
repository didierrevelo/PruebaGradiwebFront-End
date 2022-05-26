import { StyleSheet } from "aphrodite";

const screenSize = {
  small: "@media screen and (max-width: 700px)",
  big: "@media screen and (min-width: 1000px)",
  media: "@media screen and (max-width: 999px)",
};

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    alignItems: "center",
    flexDirection: "column",

  },
  imagesItems: {
    width: "100px",
    height: "100px",
  },
  header: {
    justifyContent: "left",
    margin: "10px 0px auto 230px",
    fontSize: "1rem",
    [screenSize.media]: {
      margin: "0px 0px 0px auto",
    },
    [screenSize.small]: {
      alignItems: "center",
      justifyContent: "left",
      margin: "0px 0px auto auto",
      background: "var(--background)",
      fontSize: "0.5rem",
    },
  },
  bodyContainer: {
    [screenSize.big]: {
      display: "flex",
      margin: "30px 30px 0px 230px",
      alignItems: "left",
      flexdirection: "colunm",
    },
    [screenSize.media]: {
      display: "flex",
      flexDirection: "row",
      margin: "0px 30px 0px auto",
    },
    [screenSize.small]: {
      flexDirection: "column",
      margin: "30px 30px 10px 30px",
      justifyContent: "left",
      // alignItems: "left",
    },
  },
  body: {
    marginLeft: "30px",
    flexdirection: "row", 
    [screenSize.small]: {
      // flexdirection: "column",

    },
  },

});


export default styles;
