open ReactNative

@react.component
let make = (~navigation as _, ~route as _) => {
  let (_, action) = React.useContext(RootContext.context)

  <SafeAreaView style={Theme.styles["container"]}>
    <View style={Theme.styles["container"]}>
      <Spacer size={Spacer.Multiplier(10.)} />
      <Text style={Theme.styles["title"]}> {`Memociné 🍿`->React.string} </Text>
      <Spacer size={Spacer.Auto} />
      <Pressable
        onPress={_ => action(RootContext.SetAuthorized(true))}
        style={pressed => {
          open Style
          viewStyle(~backgroundColor=Theme.colors.main, ~flexDirection=#row, ())
        }}>
        {pressed => <Text style={Theme.styles["buttonTxt"]}> {`Sign in`->React.string} </Text>}
      </Pressable>
    </View>
  </SafeAreaView>
}
