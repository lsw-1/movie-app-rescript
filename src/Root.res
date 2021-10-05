open ReactNative

@react.component
let app = () => {
  <ApolloContainer>
    <RootContext.Provider>
      <RootNavigation /> <StatusBar barStyle=#default />
    </RootContext.Provider>
  </ApolloContainer>
}
