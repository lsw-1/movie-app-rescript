open ReactNative

type size = Auto | Multiplier(int)

@react.component
let make = (~size) => {
  open Style
  let style = switch size {
  | Auto => viewStyle(~marginTop=auto, ())
  | Multiplier(multiplier) =>
    viewStyle(~height=(Theme.baseMargin *. multiplier->Belt.Int.toFloat)->dp, ())
  }

  <View style={style} />
}
