// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_Option from "bs-platform/lib/es6/belt_Option.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ReactNative from "react-native";
import * as ReactNativeHelloWorldUtils from "./ReactNativeHelloWorldUtils.bs.js";
import * as NewAppScreen from "react-native/Libraries/NewAppScreen";
import OpenURLInBrowser from "react-native/Libraries/Core/Devtools/openURLInBrowser";

var styles = ReactNative.StyleSheet.create({
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: "600"
      },
      sectionDescription: {
        fontSize: 18,
        fontWeight: "400",
        marginTop: 8
      },
      highlight: {
        fontWeight: "700"
      }
    });

function useIsDarkMode(param) {
  return Belt_Option.getWithDefault(Belt_Option.map(Caml_option.null_to_opt(ReactNative.useColorScheme()), (function (scheme) {
                    return scheme === "dark";
                  })), false);
}

function AppExample$Section(Props) {
  var title = Props.title;
  var children = Props.children;
  var isDarkMode = useIsDarkMode(undefined);
  return React.createElement(ReactNative.View, {
              style: styles.sectionContainer,
              children: null
            }, React.createElement(ReactNative.Text, {
                  children: title,
                  style: [
                    styles.sectionTitle,
                    {
                      color: isDarkMode ? NewAppScreen.Colors.white : NewAppScreen.Colors.black
                    }
                  ]
                }), React.createElement(ReactNative.Text, {
                  children: children,
                  style: [
                    styles.sectionDescription,
                    {
                      color: isDarkMode ? NewAppScreen.Colors.white : NewAppScreen.Colors.black
                    }
                  ]
                }));
}

var Section = {
  make: AppExample$Section
};

function AppExample$app(Props) {
  var isDarkMode = useIsDarkMode(undefined);
  var rrnUrl = "https://rescript-react-native.github.io/";
  return React.createElement(ReactNative.SafeAreaView, {
              children: null
            }, React.createElement(ReactNative.StatusBar, {
                  barStyle: (function () {
                        switch (isDarkMode ? "lightContent" : "darkContent") {
                          case "default" :
                              return "default";
                          case "lightContent" :
                              return "light-content";
                          case "darkContent" :
                              return "dark-content";
                          
                        }
                      })()
                }), React.createElement(ReactNative.ScrollView, {
                  contentInsetAdjustmentBehavior: "automatic",
                  style: {
                    backgroundColor: isDarkMode ? NewAppScreen.Colors.darker : NewAppScreen.Colors.lighter
                  },
                  children: null
                }, React.createElement(NewAppScreen.Header, {}), React.createElement(AppExample$Section, {
                      title: "Step One",
                      children: null
                    }, "Edit ", React.createElement(ReactNative.Text, {
                          children: "src/App.re",
                          style: styles.highlight
                        }), " to change this screen and then come back to see your edits."), React.createElement(AppExample$Section, {
                      title: "See Your Changes",
                      children: React.createElement(NewAppScreen.ReloadInstructions, {})
                    }), React.createElement(AppExample$Section, {
                      title: "Debug",
                      children: React.createElement(NewAppScreen.DebugInstructions, {})
                    }), React.createElement(AppExample$Section, {
                      title: "Learn More",
                      children: "Read the docs to discover what to do next:"
                    }), React.createElement(AppExample$Section, {
                      title: "ReScript React Native",
                      children: React.createElement(ReactNative.TouchableOpacity, {
                            onPress: (function (param) {
                                OpenURLInBrowser(rrnUrl);
                                
                              }),
                            children: React.createElement(ReactNative.Text, {
                                  children: rrnUrl,
                                  style: {
                                    color: NewAppScreen.Colors.primary,
                                    fontSize: 18,
                                    fontWeight: "400",
                                    marginTop: 8
                                  }
                                })
                          })
                    }), React.createElement(NewAppScreen.LearnMoreLinks, {})));
}

var Header = ReactNativeHelloWorldUtils.Header;

var ReloadInstructions = ReactNativeHelloWorldUtils.ReloadInstructions;

var LearnMoreLinks = ReactNativeHelloWorldUtils.LearnMoreLinks;

var DebugInstructions = ReactNativeHelloWorldUtils.DebugInstructions;

var app = AppExample$app;

export {
  Header ,
  ReloadInstructions ,
  LearnMoreLinks ,
  DebugInstructions ,
  styles ,
  useIsDarkMode ,
  Section ,
  app ,
  
}
/* styles Not a pure module */
