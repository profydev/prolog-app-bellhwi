import styled, { css } from "styled-components";
import { color, textFont, shadow } from "@styles/theme";
export const Button = styled.button`
  cursor: pointer;

  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
`;
export const ButtonStyle = styled.button<{
  size: ButtonSize;
  color: ButtonColor;
  state: ButtonState;
  icon: ButtonIcon;
  fill: boolean;
}>`
  cursor: pointer;
  border-radius: 8px;
  color: #fff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;

  // remove default button styles
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  ${(props) => {
    switch (props.size) {
      case ButtonSize.sm:
        return css`
          padding: 8px 14px;
          ${textFont("sm", "medium")}
        `;
      case ButtonSize.md:
        return css`
          padding: 10px 16px;
          ${textFont("sm", "medium")}
        `;
      case ButtonSize.lg:
        return css`
          padding: 10px 18px;
          ${textFont("md", "medium")}
        `;
      case ButtonSize.xl:
        return css`
          padding: 12px 20px;
          ${textFont("md", "medium")}
        `;
    }
  }}

  ${(props) =>
    props.state == "default"
      ? props.color == "secondary"
        ? css`
            background: ${color("primary", 50)};
            border: 1px solid ${color("primary", 50)};
            color: ${color("primary", 700)};
            box-shadow: ${shadow("xs")};
          `
        : props.color == "gray"
        ? css`
            background: #fff;
            border: 1px solid ${color("gray", 300)};
            color: ${color("gray", 700)};
            box-shadow: ${shadow("xs")};
          `
        : props.color == "empty"
        ? css`
            color: ${color("primary", 700)};
          `
        : props.color == "emptyGray"
        ? css`
            color: ${color("gray", 500)};
          `
        : props.color == "error"
        ? css`
            background: ${color("error", 600)};
            border: 1px solid ${color("error", 600)};
            box-shadow: ${shadow("xs")};
          `
        : css`
            background: ${color("primary", 600)};
            border: 1px solid ${color("primary", 600)};
            box-shadow: ${shadow("xs")};
          `
      : props.state == "hover"
      ? props.color == "secondary"
        ? css`
            background: ${color("primary", 100)};
            border: 1px solid ${color("primary", 100)};
            color: ${color("primary", 700)};
            box-shadow: ${shadow("xs")};
          `
        : props.color == "gray"
        ? css`
            background: ${color("gray", 50)};
            border: 1px solid ${color("gray", 300)};
            color: ${color("gray", 700)};
            box-shadow: ${shadow("xs")};
          `
        : props.color == "empty"
        ? css`
            background: ${color("primary", 50)};
            color: ${color("primary", 700)};
          `
        : props.color == "emptyGray"
        ? css`
            background: ${color("gray", 50)};
            color: ${color("gray", 600)};
          `
        : props.color == "error"
        ? css`
            background: ${color("error", 700)};
            border: 1px solid ${color("error", 700)};
            box-shadow: ${shadow("xs")};
          `
        : css`
            background: ${color("primary", 700)};
            border: 1px solid ${color("primary", 700)};
            box-shadow: ${shadow("xs")};
          `
      : props.state == "focused"
      ? props.color == "secondary"
        ? css`
            background: ${color("primary", 50)};
            border: 1px solid ${color("primary", 50)};
            color: ${color("primary", 700)};
            box-shadow: ${shadow("xs")},
              0px 0px 0px 4px ${color("primary", 100)};
          `
        : props.color == "gray"
        ? css`
            background: #fff;
            border: 1px solid ${color("gray", 300)};
            color: ${color("gray", 700)};
            box-shadow: ${shadow("xs")}, 0px 0px 0px 4px ${color("gray", 100)};
          `
        : props.color == "empty"
        ? css`
            color: ${color("primary", 700)};
          `
        : props.color == "emptyGray"
        ? css`
            color: ${color("gray", 500)};
          `
        : props.color == "error"
        ? css`
            background: ${color("error", 600)};
            border: 1px solid ${color("error", 600)};
            box-shadow: ${shadow("xs")}, 0px 0px 0px 4px ${color("error", 100)};
          `
        : css`
            background: ${color("primary", 700)};
            border: 1px solid ${color("primary", 700)};
            box-shadow: ${shadow("xs")},
              0px 0px 0px 4px ${color("primary", 100)};
          `
      : props.state == "disabled"
      ? props.color == "secondary"
        ? css`
            background: ${color("primary", 25)};
            border: 1px solid ${color("primary", 25)};
            color: ${color("primary", 300)};
            box-shadow: ${shadow("xs")};
          `
        : props.color == "gray"
        ? css`
            background: #fff;
            border: 1px solid ${color("gray", 200)};
            color: ${color("gray", 300)};
            box-shadow: ${shadow("xs")};
          `
        : props.color == "empty"
        ? css`
            color: ${color("gray", 300)};
          `
        : props.color == "emptyGray"
        ? css`
            color: ${color("gray", 300)};
          `
        : props.color == "error"
        ? css`
            background: ${color("error", 200)};
            border: 1px solid ${color("error", 200)};
            box-shadow: ${shadow("xs")};
          `
        : css`
            background: ${color("primary", 200)};
            border: 1px solid ${color("primary", 200)};
            box-shadow: ${shadow("xs")};
          `
      : null}

${(props) => {
    switch (props.icon) {
      case ButtonIcon.only:
        return css`
          padding: 10px;
        `;
    }
  }}

  ${(props) =>
    props.fill
      ? css`
          width: 100%;
        `
      : null}

 &:hover {
    ${(props) => {
      switch (props.color) {
        case ButtonColor.primary:
          return css`
            background: ${color("primary", 700)};
            border: 1px solid ${color("primary", 700)};
            box-shadow: ${shadow("xs")};
          `;
        case ButtonColor.secondary:
          return css`
            background: ${color("primary", 100)};
            border: 1px solid ${color("primary", 100)};
            color: ${color("primary", 700)};
            box-shadow: ${shadow("xs")};
          `;
        case ButtonColor.gray:
          return css`
            background: ${color("gray", 50)};
            border: 1px solid ${color("gray", 300)};
            color: ${color("gray", 700)};
            box-shadow: ${shadow("xs")};
          `;
        case ButtonColor.empty:
          return css`
            background: ${color("primary", 50)};
            color: ${color("primary", 700)};
          `;
        case ButtonColor.emptyGray:
          return css`
            background: ${color("gray", 50)};
            color: ${color("gray", 600)};
          `;
        case ButtonColor.error:
          return css`
            background: ${color("error", 700)};
            border: 1px solid ${color("error", 700)};
            box-shadow: ${shadow("xs")};
          `;
      }
    }}
  }

  &:focus {
    ${(props) => {
      switch (props.color) {
        case ButtonColor.primary:
          return css`
            background: ${color("primary", 700)};
            border: 1px solid ${color("primary", 700)};
            box-shadow: ${shadow("xs")},
              0px 0px 0px 4px ${color("primary", 100)};
          `;
        case ButtonColor.secondary:
          return css`
            background: ${color("primary", 50)};
            border: 1px solid ${color("primary", 50)};
            color: ${color("primary", 700)};
            box-shadow: ${shadow("xs")},
              0px 0px 0px 4px ${color("primary", 100)};
          `;
        case ButtonColor.gray:
          return css`
            background: #fff;
            border: 1px solid ${color("gray", 300)};
            color: ${color("gray", 700)};
            box-shadow: ${shadow("xs")}, 0px 0px 0px 4px ${color("gray", 100)};
          `;
        case ButtonColor.empty:
          return css`
            color: ${color("primary", 700)};
          `;
        case ButtonColor.emptyGray:
          return css`
            color: ${color("gray", 500)};
          `;
        case ButtonColor.error:
          return css`
            background: ${color("error", 600)};
            border: 1px solid ${color("error", 600)};
            box-shadow: ${shadow("xs")}, 0px 0px 0px 4px ${color("error", 100)};
          `;
      }
    }}
  }
`;

const IconImage = styled.img<{ icon: ButtonIcon }>`
  filter: brightness(0) invert(1);
  ${(props) =>
    props.icon == "leading"
      ? css`
          padding-right: 8px;
        `
      : props.icon == "trailing"
      ? css`
          padding-left: 8px;
        `
      : null}
`;

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
}

export enum ButtonState {
  default = "default",
  hover = "hover",
  focused = "focused",
  disabled = "disabled",
}

export enum ButtonIcon {
  none = "none",
  leading = "leading",
  trailing = "trailing",
  only = "only",
}
export enum ButtonFill {
  none = "none",
  fill = "fill",
}

type ButtonProps = {
  children?: React.ReactNode;
  size?: ButtonSize;
  color?: ButtonColor;
  state?: ButtonState;
  icon?: ButtonIcon;
  fill?: any;
  onClick?: () => void;
};

export function StyledButton({
  children = "Button CTA",
  size = ButtonSize.md,
  state = ButtonState.default,
  color = ButtonColor.primary,
  icon = ButtonIcon.none,
  fill,
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyle
      size={size}
      color={color}
      state={state}
      icon={icon}
      fill={fill}
      onClick={onClick}
    >
      {icon == "leading" || icon == "only" ? (
        <IconImage icon={icon} src={"/icons/check.svg"} />
      ) : null}
      {icon == "only" ? null : children}
      {icon == "trailing" ? (
        <IconImage icon={icon} src={"/icons/check.svg"} />
      ) : null}
    </ButtonStyle>
  );
}
