type action = SetDarkMode(bool) | SetAuthorized(bool)

type state = {authorized: bool, darkMode: bool}

let initState = {
  authorized: false,
  darkMode: false,
}

let reducer = (state, a) =>
  switch a {
  | SetDarkMode(dm) => {...state, darkMode: dm}
  | SetAuthorized(a) => {...state, authorized: a}
  }

let context = React.createContext((initState, (_: action) => ()))

module Provider = {
  let provider = React.Context.provider(context)

  @react.component
  let make = (~children) => {
    let reducer = React.useReducer(reducer, initState)
    React.createElement(provider, {"value": reducer, "children": children})
  }
}
