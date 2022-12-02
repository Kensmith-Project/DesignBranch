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
    width={48}
    height={48}
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    // xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Path fill="url(#a)" d="M-1.875-.375H49.5v77.25H-1.875z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#b" transform="matrix(.00125 0 0 .00083 -.002 0)" />
      </Pattern>
      <Image
        id="b"
        width={800}
        height={1199}
      />
    </Defs>
  </Svg>
)
export default SvgComponent