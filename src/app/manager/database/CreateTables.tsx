import { Component } from "react";
import SQLite from "react-native-sqlite-storage";
import { localDB } from "Jewellery/src/app/constants/Constants";

export default class CreateTables extends Component<any, any> {
  constructor ( props: any ) {
    super( props );
  }

  componentDidMount() {
    var db = SQLite.openDatabase(
      { name: localDB.dbName, readOnly: true },
      this.openCB,
      this.errorCB
    );
    db.transaction( function ( txn: any ) {
      //TODO: TABLE
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS " +
        localDB.tableName.tblUser +
        "(id  INTEGER PRIMARY KEY AUTOINCREMENT,dateCreated TEXT ,mnemonic TEXT,privateKey TEXT,address TEXT,publicKey TEXT,walletType TEXT,setUpWalletAnswerDetails TEXT,appHealthStatus TEXT NOT NULL DEFAULT '',lastUpdated TEXT)",
        []
      );
      console.log( "create database." );
    } );
  }

  errorCB( err: any ) {
    console.log( "SQL Error: " + err );
  }

  successCB() {
    console.log( "SQL executed fine" );
  }

  openCB() {
    console.log( "Database OPENED" );
  }

  render() {
    return null;
  }
}
