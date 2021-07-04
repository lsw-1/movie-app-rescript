open ReactNavigation
open ReactNative

module M = {
  type params = unit
}

module Tabs = {
  include BottomTabs.Make(M)

  @react.component
  let make = (~navigation as _, ~route as _) => {
    <Navigator initialRouteName="feed">
      <Screen name="home" component=LoginScreen.make />
      <Screen name="friends" component=LoginScreen.make />
      <Screen name="settings" component=LoginScreen.make />
    </Navigator>
  }
}

module RootStack = {
  open Style
  include Stack.Make(M)

  @react.component
  let make = () => {
    let (state, _) = React.useContext(RootContext.context)

    <ReactNavigation.Native.NavigationContainer>
      <Navigator initialRouteName="unauthorized">
        {if state.authorized {
          <>
            <Screen
              options={props =>
                options(
                  ~title="",
                  ~headerStyle=style(~backgroundColor=Theme.colors.bg, ~borderWidth=0., ()),
                  (),
                )}
              name="authorized"
              component=Tabs.make
            />
            <Screen
              options={props => options(~title="s", ~animationEnabled=false, ())}
              name="settings"
              component=LoginScreen.make
            />
          </>
        } else {
          <Screen
            options={props => options(~headerShown=false, ())}
            name="unauthorized"
            component=LoginScreen.make
          />
        }}
      </Navigator>
    </ReactNavigation.Native.NavigationContainer>
  }
}
