
const appTheme = {
/**
 * iconSize
 */

  iconSize:{
    xxxxs:"12px",
    xxxs:"15px",
    xxs:"18px",
    xs:"21px",
    sm:"25px",
    md:"28px",
    lg:"31px",
    xl:"35px",
    xxl:"39px",
    xxxl:"45px",
    xxxxl:"50px",
  },

  /**
   * Font
   */
  font: {
    family: "'Open Sans', sans-serif",
    weight: {
      light: "300",
      normal: "400",
      bold: "600",
      bolder: "900",
    },
    size: {
      xtiny:'8px',
      tiny: "11px",
      xxs: "13px",
      xs: "14px",
      sm: "16px",
      md: "18px",
      lg: "22px",
      xl: "34px",
      xxl: "45px",
    },
    stretch: {
      normal: "normal",
    },
    style: {
      normal: "normal",
    },
    newSize: {
      lg: "22px",
    },
  },

  /**
   * Colors
   */

  colors: {
    skyColor:"#02adf1",
    headerBackground:"#232425",
    walletButtonColor: `linear-gradient(
      180deg,
      rgba(255, 84, 79, 1) 0%,
      rgba(254, 193, 64, 1) 64%
    )`,
    textColor:"#fff",
    SectionBackgroundColor:"#232425",
    mainBackground:"#171819",
    inputFieldColor:"#2C2D2F",
    resharePostBg:"#2C2D2F",
    menuBg:"#171819",
    filterbuttonBg:"#232426",
    filterbuttonSelectedBg:"#2C2D2F",
    placeHolderColor:"#c8c8c8",
    messagePopBackgroundcolor:"#00000026",
    circleBg:"#121212",
    green:'#85EA75',
    black:'#000',
    imageBg:'#343538',
    lightwhitegray:'#4f5153',
    orangeLight: "#fc8f5a",
    red: "red",
    videoBG: "#232426",
    darkBackground: "#18191A",
    white: "#e3e6ea",
    dark: "#000000c2",
    messagedarkbg:"#151617",
    messageLightbg:"#222324",
    // new
    lightDark: "#232526",
    lightblack:"#2C2D2F",
    lightGray: "#2C2D2F",
    shareGray:'#2C2D2F',
    whiteshade: '#F0F0FB',
    lightshadegray:'#3A3B3D',
    pureBlack:"#121212",
    darkSolid: "#000000f2",
    success: "#34a853",
    body: "#000",
    input: "#474747",
    inputbgDark: "#272526c4",
    orange: "#FF8144",
    darkbg: "#ff8254",
    ligthorange: "#faa028",
    brightwhite: "#ffffff",
    brandyrose: "#bc8875",
    bgBlack: "#171819",
    BlueCharcoal: "#232425",
    brightred: "#FF6745",
    primary: {
      light: "#9c7e45",
      // main: "#ffc451",
      main: "#FF8144",
      dark: "#000000c2",
      contrastText: "#fff",
    },

    secondary: {
      light: "#ff4081",
      main: "#f50057",
      dark: "#c51162",
      contrastText: "#fff",
    },

    text: {
      primary: "rgba(255, 255, 255, 1)",
      secondary: "rgba(200, 200, 200, 1)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "#9e9e9e",
      main: "#e3e6ea",
      black: "rgba(40, 40, 40, 1)",

      align: {
        left: "left",
      },
    },

    border: {
      none: "none",
      light: "#f5f5f5",
      // lightGray:"#E1E1E1"
      lightGray: "rgb(225, 225, 225,0.1)",

      main: "#5f4e2e",
      dark: "#5f4e2e",
    },

    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },

    warning: "#FFB818",

    info: "#4169E1",

    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },

  /**
   * Shadows
   */
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    md: "rgba(0, 0, 0, 0.3) 0px 1px 8px 0px",
    lg: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    xl: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  },

  /**
   * Breakpoints
   */
  screen: {
    xs: "540px",
    sm: "640px",
    md: "1007px",
    lg: "1150px",
    xl: "1230px",
  },

  /**
   * Spacing
   */
  spacing: {
    none: 0,
    tiny: "7px",
    xxxs: "2px",
    xxs: "5px",
    xs: "10px",
    sm: "20px",
    md: "30px",
    lg: "40px",
    xl: "60px",
    xxl: "120px",
    xxxl: "200px",
  },
  newspacing: {
    none:0,
    xxs: "4px",
    xs: "14px",
    sm: "18px",
    md: "24px",
    lg: "38px",
    xl: "54px",
    xxl: "78px",
  },

  /**
   * Radius
   */
  radius: {
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    md: "15px",
    lg: "21px",
    xl: "25px",
    xxl: "29px",
  },
  newradius: {
    xxs: "6px",
    xs: "10px",
    sm: "14px",
    md: "18px",
    xl: "24px",
    xxl: "32px",
  },

  /**
   * zIndex
   */
  zIndex: {
    xs: 10,
    sm: 20,
    md: 30,
    lg: 40,
    xl: 50,
    xxl: 100,
  },

  /**
   * cursor
   */
  cursor: {
    notallowed: "not-allowed",
    pointer: "pointer",
  },
};

export default appTheme;