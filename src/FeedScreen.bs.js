// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Box from "./components/Box.bs.js";
import * as Theme from "./Theme.bs.js";
import * as React from "react";
import * as Spacer from "./components/Spacer.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ReactNative from "react-native";

var styles = ReactNative.StyleSheet.create({
      container: {
        backgroundColor: Theme.colors.main,
        height: 100,
        padding: Theme.spacingMultiplier(4)
      }
    });

function FeedScreen$FeedItem(Props) {
  var text = Props.text;
  return React.createElement(ReactNative.Pressable, {
              children: (function (pressed) {
                  return React.createElement(Box.make, {
                              children: null,
                              align: "stretch",
                              justify: "spaceBetween",
                              flexDirection: "row",
                              customStyle: [
                                Caml_option.some(styles.container),
                                pressed.pressed ? ({
                                      opacity: 0.5
                                    }) : undefined
                              ]
                            }, React.createElement(Box.make, {
                                  children: null,
                                  justify: "spaceBetween"
                                }, React.createElement(ReactNative.Text, {
                                      children: text,
                                      style: Theme.styles.body
                                    }), React.createElement(ReactNative.Text, {
                                      children: text,
                                      style: Theme.styles.body
                                    })), React.createElement(Box.make, {
                                  children: React.createElement(ReactNative.Text, {
                                        children: text,
                                        style: Theme.styles.body
                                      }),
                                  align: "center",
                                  justify: "spaceBetween",
                                  flexDirection: "row"
                                }));
                })
            });
}

var FeedItem = {
  styles: styles,
  make: FeedScreen$FeedItem
};

var listdata = [
  "",
  "",
  ""
];

function FeedScreen(Props) {
  return React.createElement(ReactNative.SafeAreaView, {
              style: Theme.styles.container,
              children: React.createElement(ReactNative.FlatList, {
                    ItemSeparatorComponent: (function (e) {
                        return React.createElement(Spacer.make, {
                                    size: /* Multiplier */{
                                      _0: 4
                                    }
                                  });
                      }),
                    data: listdata,
                    keyExtractor: (function (e, param) {
                        return e + " " + String(Math.random());
                      }),
                    renderItem: (function (e) {
                        return React.createElement(FeedScreen$FeedItem, {
                                    text: "hej"
                                  });
                      }),
                    style: Theme.styles.container
                  })
            });
}

var make = FeedScreen;

export {
  FeedItem ,
  listdata ,
  make ,
  
}
/* styles Not a pure module */