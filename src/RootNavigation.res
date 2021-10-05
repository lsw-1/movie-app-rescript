open ReactNavigation

module M = {
  type params = unit
}

module Tabs = {
  include BottomTabs.Make(M)

  @react.component
  let make = () => {
    <Navigator initialRouteName="feed">
      <Screen name="home" component=FeedScreen.make />
      <Screen name="friends" component=LoginScreen.make />
      <Screen name="settings" component=LoginScreen.make />
    </Navigator>
  }
}
module UnAuth = {
  include NativeStack.Make(M)

  @react.component
  let make = () => {
    <Navigator initialRouteName="unauthorized">
      <Screen
        options={props => options(~headerShown=false, ())}
        name="unauthorized"
        component=LoginScreen.make
      />
    </Navigator>
  }
}

@react.component
let make = () => {
  let (state, _) = React.useContext(RootContext.context)

  <ReactNavigation.Native.NavigationContainer>
    {switch state.authorized {
    | true => <Tabs />
    | false => <UnAuth />
    }}
  </ReactNavigation.Native.NavigationContainer>
}
