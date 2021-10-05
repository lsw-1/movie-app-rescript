open ReactNative

type size = Auto | Multiplier(float)

@react.component
let make = (~size) => {
  open Style
  let style = switch size {
  | Auto => viewStyle(~marginTop=auto, ())
  | Multiplier(multiplier) => viewStyle(~height=(Theme.baseMargin *. multiplier)->dp, ())
  }

  <View style={style} />
}
