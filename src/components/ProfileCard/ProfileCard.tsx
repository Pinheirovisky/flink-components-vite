import { IconChevron } from "@components/Icons";
import { ThemeMiddleware } from "@middlewares";
import { AccountCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { lightMain } from "@themes/main";
import { clearLocalStorage } from "@utils";
import classnames from "classnames";
import React from "react";

import Wrapper, {
  AvatarGroup,
  AvatarName,
  Exit,
  ProfileInfo,
  Separator,
} from "./ProfileCard.styles";

export interface Props {
  theme: "light" | "dark";
  logoutUrl: string;
  avatar?: string;
  isOpen?: boolean;
  name?: string;
  uiClasses?: string;
}

const ProfileCard: React.FC<Props> = ({
  avatar = "/assets/img/avatar.png",
  isOpen = false,
  name = "",
  uiClasses = "",
  theme,
  logoutUrl,
}) => {
  const WrapperStyles = classnames({
    closed: !isOpen,
  });

  const handleExit = () => {
    clearLocalStorage("rpw-flink");
    clearLocalStorage("pw-flink");

    window.location.href = logoutUrl;
  };

  const stringAvatar = (avatarName: string) => {
    return {
      sx: {
        bgcolor: lightMain.colors.primary,
      },
      children: `${avatarName.split(" ")[0][0]}${avatarName.split(" ")[1][0]}`,
    };
  };

  const cssClassList = `${WrapperStyles} ${uiClasses}`;

  const isCurrentTheme = theme === "light" ? "#A8AFC1" : "#FFF";

  return (
    <ThemeMiddleware theme={theme}>
      <Wrapper className={cssClassList} avatar={avatar}>
        <ProfileInfo>
          {name !== "" ? (
            <>
              <AvatarGroup>
                <Avatar alt={name} className="avatar" {...stringAvatar(name)} />
                <AvatarName>{name}</AvatarName>
              </AvatarGroup>
              <IconChevron color={isCurrentTheme} />
            </>
          ) : (
            <AccountCircle color="primary" className="avatar" />
          )}
        </ProfileInfo>

        {name !== "" && (
          <>
            <Separator className="separator" />

            <Exit className="exit">
              <button onClick={handleExit} type="submit">
                Sair
              </button>
            </Exit>
          </>
        )}
      </Wrapper>
    </ThemeMiddleware>
  );
};

export default ProfileCard;
