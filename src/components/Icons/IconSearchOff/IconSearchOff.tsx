import React from "react";

// styles
import { IconWrapper } from "../container";

interface Props {
  className?: string;
  color?: string;
  title?: string;
}

const IconSearchOff: React.FC<Props> = ({
  className = "",
  color = "#596073",
  title = "",
}: Props) => (
  <IconWrapper
    className={className}
    fill="none"
    height="110"
    size="great"
    type="small"
    viewBox="0 0 143 143"
    width="110"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== "" && <title>{title}</title>}
    <path
      d="M92.3541 83.4168H87.647L85.9787 81.808C93.1287 73.4663 96.8229 62.0859 94.797 49.9905C91.9966 33.4263 78.1733 20.2584 61.5495 18.173C38.9675 15.3726 19.6625 32.0559 18.0537 53.6251H30.0895C31.5195 40.9934 41.5295 30.9834 54.2804 29.9109C69.4145 28.6001 83.4166 41.4105 83.4166 56.6043C83.4166 71.4405 71.4404 83.4168 56.6041 83.4168C55.5912 83.4168 54.6379 83.238 53.625 83.1188V95.1547C53.625 95.1547 53.625 95.1547 53.6845 95.2142C64.4095 95.9888 74.36 92.4138 81.8079 85.9788L83.4166 87.6472V92.3542L108.74 117.677C111.182 120.12 115.175 120.12 117.617 117.677C120.06 115.234 120.06 111.242 117.617 108.799L92.3541 83.4168Z"
      fill={color}
    />
    <path
      d="M36.4651 66.5546L23.8335 79.1863L11.2018 66.5546C10.0101 65.363 8.16305 65.363 6.97139 66.5546C5.77972 67.7463 5.77972 69.5934 6.97139 70.7851L19.6031 83.4167L6.97139 96.0484C5.77972 97.2401 5.77972 99.0871 6.97139 100.279C8.16305 101.47 10.0101 101.47 11.2018 100.279L23.8335 87.6471L36.4651 100.279C37.6568 101.47 39.5039 101.47 40.6955 100.279C41.8872 99.0871 41.8872 97.2401 40.6955 96.0484L28.0639 83.4167L40.6955 70.7851C41.8872 69.5934 41.8872 67.7463 40.6955 66.5546C39.5039 65.4226 37.6568 65.4226 36.4651 66.5546Z"
      fill={color}
    />
  </IconWrapper>
);

IconSearchOff.displayName = "IconSearchOff";

export default React.memo(IconSearchOff);
