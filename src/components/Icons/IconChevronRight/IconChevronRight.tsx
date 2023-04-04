import React from "react";

interface Props {
  color?: string;
  uiClasses?: string;
  title?: string;
}

const IconChevronRight: React.FC<Props> = ({
  color = "#596073",
  uiClasses = "",
  title = "",
}: Props) => (
  <>
    {/* <svg className={uiClasses} width="24px" height="24px" viewBox="0 0 24 24">
      {title !== '' && <title>{title}</title>}
      <path d="M7 6v12l10-6z" fill={color} />
    </svg> */}

    <svg className={uiClasses} width="14px" height="14px" viewBox="0 0 224 224">
      {title !== "" && <title>{title}</title>}
      <path
        d="M216.2,99.23L20.5,1.63c-2.1-1.1-4.8-1.6-6.9-1.6v0C5.7,0.53,0,6.33,0,14.23v195.7c0,10.5,11,17.3,20.5,12.6l195.7-98.1
			C226.7,119.23,226.7,104.53,216.2,99.23z M27.8,187.33V36.73l150.6,75L27.8,187.33z"
        fill={color}
      />
    </svg>
  </>
);

IconChevronRight.displayName = "IconChevronRight";

export default React.memo(IconChevronRight);
