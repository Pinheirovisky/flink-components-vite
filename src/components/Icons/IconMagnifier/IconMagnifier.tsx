import React from "react";

interface Props {
  className?: string;
}

const IconMagnifier: React.FC<Props> = ({ className = "" }: Props) => {
  return (
    <svg
      className={className}
      fill="none"
      height="123"
      viewBox="0 0 123 123"
      width="123"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.5833 96.2501C59.5534 96.2501 69.6579 92.5443 77.7134 86.3163L113.24 121.843C113.631 122.234 114.264 122.234 114.655 121.843L121.843 114.655C122.234 114.264 122.234 113.631 121.843 113.24L86.3162 77.7135C92.5442 69.658 96.25 59.5535 96.25 48.5834C96.25 22.2578 74.9089 0.916748 48.5833 0.916748C22.2578 0.916748 0.916668 22.2578 0.916668 48.5834C0.916668 74.909 22.2578 96.2501 48.5833 96.2501ZM89.0968 48.5802C89.0968 70.957 70.9569 89.0969 48.5802 89.0969C26.2034 89.0969 8.0635 70.957 8.0635 48.5802C8.0635 26.2035 26.2034 8.06358 48.5802 8.06358C70.9569 8.06358 89.0968 26.2035 89.0968 48.5802Z"
        fill="#596073"
      />
    </svg>
  );
};

export default IconMagnifier;
