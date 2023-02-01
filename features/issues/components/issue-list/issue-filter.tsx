import styled from "styled-components";
import { Select, Input, StyledButton } from "@features/ui";
import { SelectState } from "@features/ui/select/select";
import { InputIcon, InputState } from "@features/ui/input/input";
import { ButtonIcon } from "@features/ui/button/button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterContainer = styled.div`
  display: flex;
`;

export const IssueFilter = () => {
  return (
    <Container>
      <StyledButton icon={ButtonIcon.leading}>
        Resolve selected issues
      </StyledButton>
      <FilterContainer>
        <Select state={SelectState.empty}></Select>
        <Select state={SelectState.empty}></Select>
        <Input state={InputState.empty} icon={InputIcon.icon}>
          Project Name
        </Input>
      </FilterContainer>
    </Container>
  );
};
