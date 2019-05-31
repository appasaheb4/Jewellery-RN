import Config from "react-native-config";

//Colors  
var colors = {
  appColor: "#2595D6",
  tabbarActiveColor: "#2D71B6",
  black: "#000000",
  white: "#FFFFFF",
  Saving: "#E6A620",
  Secure: "#30A2F3",
  Vault: "#679F37",
  Joint: "#660000",
  placeholder: "#5F5F5F"
};

const assetsImages = "../../assets/images/";
var images = {
  appBackgound: require( assetsImages + "img/backgound.jpeg" ),
  logo: require( assetsImages + "icons/logo.png" ),
};

//Local Database    
var localDB = {
  dbName: Config.DB_NAME,
  tableName: {
    tblUser: Config.DB_TBL_USER
  }
};

var asyncStorageKeys = {
  flag_Pincode: "flag_Pincode"
}


export {
  localDB,
  colors,
  images,
  asyncStorageKeys
};   
