import styled, { css } from "styled-components";
import { color, shadow, textFont } from "@styles/theme";
import chevronDown from "../../../public/icons/chevron-down.svg";

export enum SelectState {
  empty = "empty",
  filled = "filled",
  focused = "focused",
  disabled = "disabled",
  open = "open",
}

export enum SelectIcon {
  none = "none",
  icon = "icon",
}

export enum SelectLabel {
  none = "none",
  label = "label",
}

export enum SelectHint {
  none = "none",
  hint = "hint",
}

export enum SelectError {
  none = "none",
  error = "error",
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectStyle = styled.div<{
  state: SelectState;
  icon: SelectIcon;
  label: SelectLabel;
  hint: SelectHint;
  error: SelectError;
}>`
  -webkit-appearance: none;
  appearance: none;
  background-image: url(${chevronDown});
  background-repeat: no-repeat;
  background-position: calc(100% - 14px) center;
  background-size: 20px;
  padding: 10px 14px;
  border-radius: 8px;
  background-color: white;
  width: 320px;
  height: 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  ${textFont("md", "regular")};

  ${(props) => {
    switch (props.state) {
      case SelectState.empty:
        return css`
          border: 1px solid ${color("gray", 300)};
          box-shadow: ${shadow("xs")};
          color: ${color("gray", 500)};
        `;
      case SelectState.filled:
        return css`
          border: 1px solid ${color("gray", 300)};
          box-shadow: ${shadow("xs")};
          color: ${color("gray", 900)};
        `;
      case SelectState.focused:
        return css`
          border: 1px solid ${color("primary", 300)};
          box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
          color: ${color("gray", 900)};
        `;
      case SelectState.disabled:
        return css`
          border: 1px solid ${color("gray", 300)};
          box-shadow: ${shadow("xs")};
          background-color: ${color("gray", 50)};
          color: ${color("gray", 500)};
        `;
      case SelectState.open:
        return css`
          border: 1px solid ${color("primary", 300)};
          box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
          color: ${color("gray", 900)};
        `;
    }
  }}

  ${(props) =>
    props.error == "error" &&
    css`
      border: 1px solid ${color("error", 300)};
      box-shadow: none;
    `}}

  ${(props) =>
    props.error == "error"
      ? props.state == "focused"
        ? css`
            box-shadow: 0px 0px 0px 4px ${color("error", 100)};
          `
        : null
      : null}}
`;

const OptionContainer = styled.div`
  background-color: white;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.1),
    0px 4px 6px -2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  width: 320px;
  height: 320px;
  margin-top: 8px;
`;

const OptionStyle = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  color: ${color("gray", 900)};
  background-color: ${(props) =>
    props.selected ? color("primary", 25) : "white"};
`;

const Label = styled.p`
  color: ${color("gray", 700)};
  margin: 0px 0px 6px;
`;

const Hint = styled.p<{ error: SelectError }>`
  color: ${(props) =>
    props.error == "error" ? color("error", 500) : color("gray", 500)};
  ${textFont("sm", "regular")};
  margin: 6px 0px 0px;
`;

type SelectProps = {
  children?: React.ReactNode;
  state: SelectState;
  icon: SelectIcon;
  label: SelectLabel;
  hint: SelectHint;
  error: SelectError;
};

export function Select({
  children,
  state = SelectState.empty,
  label = SelectLabel.none,
  hint = SelectHint.none,
  error = SelectError.none,
  icon = SelectIcon.none,
}: SelectProps) {
  return (
    <SelectContainer>
      {label == "label" ? <Label>Team member</Label> : null}
      <SelectStyle
        icon={icon}
        state={state}
        label={label}
        hint={hint}
        error={error}
      >
        {icon == "icon" ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/icons/user.svg"
            alt="User"
            style={{ marginRight: "8px" }}
          />
        ) : null}
        {state == "empty" ? "Select team member" : "Olivia Rhye"}
      </SelectStyle>
      {state == "open" ? (
        <OptionContainer>
          <OptionStyle>Phoenix Baker</OptionStyle>
          <OptionStyle selected>
            Olivia Rhye
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/check-select.svg" alt="Check select" />
          </OptionStyle>
          <OptionStyle>Lana Steiner</OptionStyle>
          <OptionStyle>Demi Wilkinson</OptionStyle>
          <OptionStyle>Candice Wu</OptionStyle>
          <OptionStyle>Natali Craig</OptionStyle>
          <OptionStyle>Drew Cano</OptionStyle>
        </OptionContainer>
      ) : null}
      {hint == "hint" ? (
        <Hint error={error}>
          {error
            ? "This is an error message."
            : "This is a hint text to help user."}
        </Hint>
      ) : null}
    </SelectContainer>
  );
}
