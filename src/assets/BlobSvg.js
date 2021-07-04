import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, Path, G } from "react-native-svg";

function Blob(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={327} height={282} {...props}>
      <Defs>
        <LinearGradient id="prefix__a" gradientTransform="rotate(90 .5 .5)">
          <Stop offset={0} stopColor="hsl(259, 79%, 61%)" />
          <Stop offset={1} stopColor="rgba(233, 63, 141, 1.00)" />
        </LinearGradient>
      </Defs>
      <Path
        d="M128 0c31.066 0 50.142 57.017 92 79 41.858 21.983 106.5 8.934 106.5 40 0 62.132-201.868 131-264 131-31.066 0-32.892-34.017-7-67 25.892-32.983 64-29.934 64-61 0-62.132-53.632-122 8.5-122z"
        fill="url(#prefix__a)"
      />
      <G>
        <Defs>
          <LinearGradient id="prefix__b" gradientTransform="rotate(51 .5 .5)">
            <Stop offset={0} stopColor="hsl(62, 100%, 50%)" />
            <Stop offset={1} stopColor="hsl(331, 79%, 57%)" />
          </LinearGradient>
        </Defs>
        <Path
          d="M128 48c33.966 0 84.991-32.259 106-30.5 21.009 1.759 31.5 105.034 31.5 139 0 33.966-37.491 47.866-50.5 68s-1.534 46.5-35.5 46.5C111.569 271 0 156.931 0 89s60.069-41 128-41z"
          fill="url(#prefix__b)"
        />
      </G>
    </Svg>
  );
}

export default Blob;
