type action = SetDarkMode(bool) | SetAuthorized(bool)

type state = {authorized: bool, darkMode: bool}

let initState = {
  authorized: false,
  darkMode: false,
}

let reducer = (state, action) =>
  switch action {
  | SetDarkMode(darkMode) => {...state, darkMode: darkMode}
  | SetAuthorized(authorized) => {...state, authorized: authorized}
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
