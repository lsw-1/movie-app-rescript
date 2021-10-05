open ReactNative

type boxVariant = Default | Container | WithSpacing

@react.component
let make = (
  ~children,
  ~variant=Default,
  ~align=#flexStart,
  ~justify=#flexStart,
  ~flex=1.,
  ~flexDirection=#column,
  ~customStyle=Style.style(),
) => {
  let variantStyle = switch variant {
  | Default => Theme.styles["defaultBox"]
  | Container => Theme.styles["container"]
  | WithSpacing => Theme.styles["defaultBoxWithSpacing"]
  }
  <View
    style={
      open Style
      array([
        style(~flex, ~flexDirection, ~alignItems=align, ~justifyContent=justify, ()),
        variantStyle,
        customStyle,
      ])
    }>
    {children}
  </View>
}
