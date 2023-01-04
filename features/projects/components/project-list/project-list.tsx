import styled from "styled-components";
import { breakpoint, space, color } from "@styles/theme";
import { ProjectCard } from "../project-card";
import { useProjects } from "../../api/use-projects";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  // reset list styles
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

const LoadingCircle = styled.img`
  display: block;
  width: 64px;
  height: 64px;
  margin: 0px auto;
  margin-top: 153px;
  animation: rotation 2s infinite linear;

  @media (min-width: ${breakpoint("desktop")}) {
    margin-top: 129px;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fda29b;
  border-radius: 8px;
  background-color: #fffbfa;
  width: 100%;
  padding: 16px;
  color: ${color("error", 700)};
  box-sizing: border-box;
`;

const ErrorText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding-left: 12px;
  margin: 0px;
`;

const ErrorTextGap = styled.div`
  @media (min-width: ${breakpoint("desktop")}) {
    flex-grow: 1;
  }
`;

export function ProjectList() {
  const { data, isLoading, isError, refetch } = useProjects();

  const ERROR_TEXT = "There was a problem while loading the project data";

  if (isLoading) {
    return (
      <LoadingCircle
        id="loading-circle"
        src={"/icons/loading-circle.svg"}
      ></LoadingCircle>
    );
  }

  if (isError) {
    return (
      <ErrorContainer id="error-screen">
        <img src={"/icons/alert-circle.svg"} />
        <ErrorText>{ERROR_TEXT}</ErrorText>
        <ErrorTextGap></ErrorTextGap>
        <ErrorText
          style={{ marginRight: "8px", cursor: "pointer" }}
          onClick={() => refetch()}
          id="try-again"
        >
          Try again
        </ErrorText>
        <img src={"/icons/arrow-right.svg"} />
      </ErrorContainer>
    );
  }

  return (
    <List>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </List>
  );
}
