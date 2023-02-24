import styled from "styled-components";
import { Select, Input, StyledButton } from "@features/ui";
import { SelectState } from "@features/ui/select/select";
import { InputIcon, InputLabel, InputState } from "@features/ui/input/input";
import { ButtonIcon } from "@features/ui/button/button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
`;

const BoxContainer = styled.div`
  width: 160px;
  height: 44px;
  margin-right: 16px;
  margin-bottom: 16px;
  width: 100%;
`;

export const IssueFilter = () => {
  const [statusSelectOpen, setStatusSelectOpen] = useState(false);
  const [levelSelectOpen, setLevelSelectOpen] = useState(false);
  const [currentState, setCurrentState] = useState("All status");
  const [currentLevel, setCurrentLevel] = useState("All level");
  const stateSelectOptions = ["All status", "Unresolved", "Resolved"];
  const levelSelectOptions = ["All level", "Error", "Warning", "Info"];
  const issues = useSelector((state: any) => state.issues);

  return (
    <Container>
      <StyledButton icon={ButtonIcon.leading}>
        Resolve selected issues
      </StyledButton>
      <FilterContainer>
        <div style={{ width: "160px", height: "44px", marginRight: "16px" }}>
      <StyledButton icon={ButtonIcon.leading} fill={true}>
        Resolve selected issues
      </StyledButton>
      <FilterContainer>
        <BoxContainer>
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
        </div>
        <div style={{ width: "160px", height: "44px", marginRight: "16px" }}>
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
        </div>
        <div style={{ width: "280px", height: "44px" }}>
        </BoxContainer>
        <BoxContainer>
          <Input
            state={InputState.empty}
            icon={InputIcon.iconSearch}
            label={InputLabel.custom}
            placeholder="Project Name"
          ></Input>
        </div>
        </BoxContainer>
      </FilterContainer>
    </Container>
  );
};
