open ReactNative

module FeedItem = {
  let styles = {
    open Style
    open Theme
    StyleSheet.create({
      "container": style(
        ~height=100.->dp,
        ~backgroundColor=colors.main,
        ~padding=spacingMultiplier(4.),
        (),
      ),
    })
  }

  @react.component
  let make = (~text) => {
    <Pressable>
      {pressed =>
        <Box
          flexDirection=#row
          justify=#spaceBetween
          align=#stretch
          customStyle={
            open Style

            arrayOption([
              Some(styles["container"]),
              pressed.pressed ? Some(viewStyle(~opacity=0.5, ())) : None,
            ])
          }>
          <Box justify=#spaceBetween>
            <Text style={Theme.styles["body"]}> {text->React.string} </Text>
            <Text style={Theme.styles["body"]}> {text->React.string} </Text>
          </Box>
          <Box flexDirection=#row justify=#spaceBetween align=#center>
            <Text style={Theme.styles["body"]}> {text->React.string} </Text>
          </Box>
        </Box>}
    </Pressable>
  }
}

let listdata = ["", "", ""]

@react.component
let make = (~navigation as _, ~route as _) => {
  <SafeAreaView style={Theme.styles["container"]}>
    <FlatList
      _ItemSeparatorComponent={e => <Spacer size={Spacer.Multiplier(4.)} />}
      style={Theme.styles["container"]}
      keyExtractor={(e, _) => `${e} ${Js.Math.random()->Belt.Float.toString}`}
      renderItem={e => <FeedItem text="hej" />}
      data={listdata}
    />
  </SafeAreaView>
}
