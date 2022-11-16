import * as React from "react"
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={200}
    height={200}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h306v275H0z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.003 0 0 .00333 -.09 0)" />
      </Pattern>
      <Image
        id="b"
        width={300}
        height={300}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
)

export default SvgComponent
