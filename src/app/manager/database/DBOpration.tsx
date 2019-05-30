//TODO: Custome Pages
import { localDB } from "Jewellery/src/app/constants/Constants";
var utils = require( "Jewellery/src/app/constants/Utils" );

import SQLite from "react-native-sqlite-storage";
var db = SQLite.openDatabase(
  localDB.dbName,
  "1.0",
  "Jevellery Database",
  200000
);


module.exports = {

};
