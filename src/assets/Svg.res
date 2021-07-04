module Blob = {
  @bs.module("./BlobSvg.js") @react.component
  external make: _ => React.element = "default"
}

module Cog = {
  @bs.module("./Cog.js") @react.component
  external make: _ => React.element = "default"
}
