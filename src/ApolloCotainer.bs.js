// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as ApolloClient from "rescript-apollo-client/src/ApolloClient.bs.js";
import * as Client from "@apollo/client";
import * as ApolloClient__Link_Http_HttpLink from "rescript-apollo-client/src/@apollo/client/link/http/ApolloClient__Link_Http_HttpLink.bs.js";
import * as ApolloClient__Cache_InMemory_InMemoryCache from "rescript-apollo-client/src/@apollo/client/cache/inmemory/ApolloClient__Cache_InMemory_InMemoryCache.bs.js";

var graphqlEndpoint = "https://drzwe22nyvdg7d7lls6lycbnze.appsync-api.eu-central-1.amazonaws.com/graphql";

var headers = {
  "x-api-key": "da2-whcjkahcovbyxgafmd2ie6jrvy\t"
};

var httpLink = ApolloClient__Link_Http_HttpLink.make((function (param) {
        return graphqlEndpoint;
      }), undefined, undefined, Caml_option.some(headers), undefined, undefined, undefined, undefined);

var instance = ApolloClient.make(undefined, undefined, undefined, Caml_option.some(httpLink), ApolloClient__Cache_InMemory_InMemoryCache.make(undefined, undefined, undefined, undefined, undefined, undefined), undefined, undefined, true, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined);

function make(children) {
  return React.createElement(Client.ApolloProvider, {
              client: instance,
              children: children
            });
}

export {
  graphqlEndpoint ,
  headers ,
  httpLink ,
  instance ,
  make ,
  
}
/* httpLink Not a pure module */
