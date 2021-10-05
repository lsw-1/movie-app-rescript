open ReactNative

type colors = {
  main: string,
  secondary: string,
  tertiary: string,
  bg: string,
  title: string,
  subtitle: string,
  body: string,
}

let colors = {
  main: "#FDAC21",
  secondary: "#F6FF00",
  tertiary: "#34008F",
  bg: "#1A1D2B",
  title: "#FFFFFF",
  subtitle: "#FFFFFF",
  body: "#FFFFFF",
}

let baseMargin = 4.

let spacingMultiplier = multiplier => (4. *. multiplier)->Style.dp

let fontBase = 4.

let styles = {
  open Style
  StyleSheet.create({
    "flex": style(~flex=1., ()),
    "container": style(
      ~flex=1.,
      ~backgroundColor=colors.bg,
      ~paddingHorizontal=(baseMargin *. 4.)->dp,
      (),
    ),
    "defaultBox": style(~flex=1., ()),
    "defaultBoxWithSpacing": style(
      ~flex=1.,
      ~backgroundColor=colors.bg,
      ~paddingHorizontal=(baseMargin *. 4.)->dp,
      (),
    ),
    "center": style(~alignItems=#center, ~justifyContent=#center, ()),
    "title": style(~fontSize=48., ~color=colors.title, ~fontWeight=#_800, ()),
    "subtitle": style(~fontSize=fontBase *. 6., ~color=colors.title, ~fontWeight=#_500, ()),
    "body": style(~fontSize=14., ~color=colors.title, ~fontWeight=#_500, ()),
    "buttonTxt": style(~fontSize=18., ~color=colors.title, ~fontWeight=#_700, ()),
  })
}
