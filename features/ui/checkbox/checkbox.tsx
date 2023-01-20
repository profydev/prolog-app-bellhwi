import styled, { css } from "styled-components";
import { color } from "@styles/theme";

export enum CheckboxSize {
  sm = "sm",
  md = "md",
}

export enum CheckboxState {
  default = "default",
  hover = "hover",
  focused = "focused",
  disabled = "disabled",
}

export enum CheckboxLabel {
  none = "none",
  label = "label",
}

export enum CheckState {
  unchecked = "unchecked",
  checked = "checked",
  partlyChecked = "partlyChecked",
}

export const CheckboxContainer = styled.div<{
  size: CheckboxSize;
  state: CheckboxState;
}>`
  display: flex;
  align-items: center;
  font-size: ${(props) => (props.size == "sm" ? "14px" : "16px")};
  color: ${(props) =>
    props.state == "disabled" ? color("gray", 300) : color("gray", 700)};
`;

export const CheckboxStyle = styled.div<{
  size: CheckboxSize;
  state: CheckboxState;
  label: CheckboxLabel;
  checkState: CheckState;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: ${(props) => (props.size == "sm" ? "4px" : "6px")};

  ${(props) =>
    props.size == "sm"
      ? css`
          width: 16px;
          height: 16px;
        `
      : css`
          width: 20px;
          height: 20px;
        `}

  ${(props) =>
    props.state == "default"
      ? props.checkState == "unchecked"
        ? css`
            border: 1px solid ${color("gray", 300)};
            background: white;
          `
        : css`
            border: 1px solid ${color("primary", 600)};
            background: ${color("primary", 50)};
          `
      : props.state == "hover"
      ? css`
          border: 1px solid ${color("primary", 600)};
          background: ${color("primary", 50)};
        `
      : props.state == "focused"
      ? css`
          border: 1px solid ${color("primary", 600)};
          background: ${color("primary", 50)};
          box-shadow: 0px 0px 0px 4px ${color("primary", 300)};
        `
      : props.state == "disabled"
      ? css`
          background: ${color("gray", 100)};
          border: 1px solid ${color("gray", 200)};
        `
      : null}
`;

type CheckboxProps = {
  children?: React.ReactNode;
  size?: CheckboxSize;
  label?: CheckboxLabel;
  state?: CheckboxState;
  checkState?: CheckState;
};

export function Checkbox({
  children,
  size = CheckboxSize.sm,
  state = CheckboxState.default,
  label = CheckboxLabel.none,
  checkState = CheckState.unchecked,
}: CheckboxProps) {
  return (
    <CheckboxContainer size={size} state={state}>
      <CheckboxStyle
        size={size}
        label={label}
        state={state}
        checkState={checkState}
      >
        {checkState == "checked" ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={
              state == "disabled" ? "/icons/check-gray.svg" : "/icons/check.svg"
            }
            alt="checked mark"
          />
        ) : checkState == "partlyChecked" ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={
              state == "disabled" ? "/icons/minus-gray.svg" : "/icons/minus.svg"
            }
            alt="partly checked mark"
          />
        ) : null}
      </CheckboxStyle>
      {children}
    </CheckboxContainer>
  );
}
