import styled, { css } from "styled-components";
import { color, shadow, textFont } from "@styles/theme";

export enum InputState {
  empty = "empty",
  filled = "filled",
  focused = "focused",
  disabled = "disabled",
}

export enum InputIcon {
  none = "none",
  icon = "icon",
  iconSearch = "iconSearch",
}

export enum InputLabel {
  none = "none",
  label = "label",
  custom = "custom",
}

export enum InputHint {
  none = "none",
  hint = "hint",
}

export enum InputError {
  none = "none",
  error = "error",
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputStyle = styled.div<{
  state: InputState;
  icon: InputIcon;
  label: InputLabel;
  hint: InputHint;
  error: InputError;
}>`
  -webkit-appearance: none;
  appearance: none;
  padding: 10px 14px;
  border-radius: 8px;
  background-color: white;
  width: 100%;
  height: 46px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  ${textFont("md", "regular")};

  ${(props) => {
    switch (props.state) {
      case InputState.empty:
        return css`
          border: 1px solid ${color("gray", 300)};
          box-shadow: ${shadow("xs")};
          color: ${color("gray", 500)};
        `;
      case InputState.filled:
        return css`
          border: 1px solid ${color("gray", 300)};
          box-shadow: ${shadow("xs")};
          color: ${color("gray", 900)};
        `;
      case InputState.focused:
        return css`
          border: 1px solid ${color("primary", 300)};
          box-shadow: 0px 0px 0px 4px ${color("primary", 100)};
          color: ${color("gray", 900)};
        `;
      case InputState.disabled:
        return css`
          border: 1px solid ${color("gray", 300)};
          box-shadow: ${shadow("xs")};
          background-color: ${color("gray", 50)};
          color: ${color("gray", 500)};
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

const InputArea = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

const Label = styled.p`
  color: ${color("gray", 700)};
  margin: 0px 0px 6px;
`;

const Hint = styled.p<{ error: InputError }>`
  color: ${(props) =>
    props.error == "error" ? color("error", 500) : color("gray", 500)};
  ${textFont("sm", "regular")};
  margin: 6px 0px 0px;
`;

type InputProps = {
  children?: React.ReactNode;
  state: InputState;
  icon?: InputIcon;
  label?: InputLabel;
  hint?: InputHint;
  error?: InputError;
  placeholder?: string;
  labelName?: string;
};

export function Input({
  children,
  labelName,
  state = InputState.empty,
  label = InputLabel.none,
  hint = InputHint.none,
  error = InputError.none,
  icon = InputIcon.none,
  placeholder = "olivia@untitledui.com",
}: InputProps) {
  return (
    <InputContainer>
      {label == "none" ? null : label == "label" ? (
        <Label>Email</Label>
      ) : (
        labelName
      )}
      <InputStyle
        icon={icon}
        state={state}
        label={label}
        hint={hint}
        error={error}
      >
        {icon == "icon" ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/icons/mail.svg"
            alt="mail"
            style={{ marginRight: "8px" }}
          />
        ) : icon == "iconSearch" ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/icons/search.svg"
            alt="search"
            style={{ marginRight: "8px" }}
          />
        ) : null}
        {<InputArea placeholder="Project Name" />}
        {error == "error" ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src="/icons/alert-circle.svg"
            alt="alert"
            style={{ marginLeft: "auto" }}
          />
        ) : null}
      </InputStyle>
      {hint == "hint" ? (
        <Hint error={error}>
          {error
            ? "This is an error message."
            : "This is a hint text to help user."}
        </Hint>
      ) : null}
    </InputContainer>
  );
}
