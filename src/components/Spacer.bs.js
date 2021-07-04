// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Theme from "../Theme.bs.js";
import * as React from "react";
import * as ReactNative from "react-native";

function Spacer(Props) {
  var size = Props.size;
  var style = size ? ({
        height: Theme.baseMargin * size._0
      }) : ({
        marginTop: "auto"
      });
  return React.createElement(ReactNative.View, {
              style: style
            });
}

var make = Spacer;

export {
  make ,
  
}
/* Theme Not a pure module */
