import styled, { css } from "styled-components";
import { color, shadow, textFont } from "@styles/theme";
import { useState } from "react";

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
  cursor: default;
  position: relative;
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  padding: 10px 14px;
  border-radius: 8px;
  background-color: white;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    top: 50%;
    left: calc(100% - 28px);
    background-image: url('/icons/chevron-down.svg');
    background-repeat: repeat;
    translate: -50% -50%;
    transform: ${(props) => (props.state == "open" ? "rotate(180deg)" : null)};
  }
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
  margin-top: 8px;
  z-index: 100;
`;

const OptionStyle = styled.div<{ selected?: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
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
  defaultOption?: string[];
  placeholder?: string;
  state: SelectState;
  icon?: SelectIcon;
  label?: SelectLabel;
  hint?: SelectHint;
  error?: SelectError;
  labelName?: string;
  options?: any;
  errorMsg?: string;
  hintMsg?: string;
  selectedIndex?: number;
  setStatusSelectedIndex?: number;
  onClick: () => void;
};

export function Select({
  children,
  placeholder = "Select team member",
  defaultOption = ["Olivia Rhye"],
  labelName = "Team member",
  options = [
    "Phoenix Baker",
    <>
      Olivia Rhye
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/check-select.svg" alt="Check select" />
    </>,
    "Lana Steiner",
    "Demi Wilkinson",
    "Candice Wu",
    "Natali Craig",
    "Drew Cano",
  ],
  errorMsg = "This is an error message.",
  hintMsg = "This is a hint text to help user.",
  state = SelectState.empty,
  label = SelectLabel.none,
  hint = SelectHint.none,
  error = SelectError.none,
  icon = SelectIcon.none,
  selectedIndex = 0,
  onClick,
}: SelectProps) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(selectedIndex);
  return (
    <SelectContainer onClick={onClick}>
      {label == "label" ? <Label>{labelName}</Label> : null}
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
        {state == "empty" ? placeholder : defaultOption[selectedOptionIndex]}
      </SelectStyle>
      {state == "open" ? (
        <OptionContainer>
          {options.map((option: string, index: number) => (
            <OptionStyle
              key={index}
              selected={index == selectedOptionIndex ? true : false}
              onClick={() => {
                setSelectedOptionIndex(index);
              }}
            >
              {option}
              {index == selectedOptionIndex ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img src="/icons/check-select.svg" alt="Check select" />
              ) : null}
            </OptionStyle>
          ))}
        </OptionContainer>
      ) : null}
      {hint == "hint" ? (
        <Hint error={error}>{error ? errorMsg : hintMsg}</Hint>
      ) : null}
    </SelectContainer>
  );
}
