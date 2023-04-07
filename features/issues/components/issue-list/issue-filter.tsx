import styled from "styled-components";
import { Select, Input, StyledButton } from "@features/ui";
import { SelectState } from "@features/ui/select/select";
import { InputIcon, InputLabel, InputState } from "@features/ui/input/input";
import { ButtonIcon } from "@features/ui/button/button";
import { breakpoint } from "@styles/theme";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  & > button {
    width: 100%;
  }

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
    & > button {
      width: inherit;
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${breakpoint("desktop")}) {
    flex-direction: row;
    align-items: center;
    width: 70%;
  }
`;

const BoxContainer = styled.div`
  margin-right: 16px;
  margin-bottom: 16px;
  width: 100%;

  @media (min-width: ${breakpoint("desktop")}) {
    margin-bottom: 0px;
  }
`;

export const IssueFilter = () => {
  const [statusSelectOpen, setStatusSelectOpen] = useState(false);
  const [levelSelectOpen, setLevelSelectOpen] = useState(false);
  const stateSelectOptions = ["All status", "Unresolved", "Resolved"];
  const levelSelectOptions = ["All level", "Error", "Warning", "Info"];

  return (
    <Container>
      <StyledButton icon={ButtonIcon.leading}>
        Resolve selected issues
      </StyledButton>

      <FilterContainer>
        <BoxContainer className="status-container">
          <Select
            state={statusSelectOpen ? SelectState.open : SelectState.filled}
            options={stateSelectOptions}
            defaultOption={stateSelectOptions}
            selectedIndex={0}
            onClick={() => {
              if (statusSelectOpen) {
                setStatusSelectOpen(false);
              } else {
                setStatusSelectOpen(true);
              }
            }}
          ></Select>
        </BoxContainer>
        <BoxContainer>
          <Select
            state={levelSelectOpen ? SelectState.open : SelectState.filled}
            options={levelSelectOptions}
            defaultOption={levelSelectOptions}
            selectedIndex={0}
            onClick={() => {
              levelSelectOpen
                ? setLevelSelectOpen(false)
                : setLevelSelectOpen(true);
            }}
          ></Select>
        </BoxContainer>
        <BoxContainer className="project-container">
          <Input
            state={InputState.empty}
            icon={InputIcon.iconSearch}
            label={InputLabel.custom}
            placeholder="Project Name"
          ></Input>
        </BoxContainer>
      </FilterContainer>
    </Container>
  );
};
