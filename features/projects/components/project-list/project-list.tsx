import styled from "styled-components";
import { breakpoint, space } from "@styles/theme";
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

export function ProjectList() {
  const { data, isLoading, isError, error } = useProjects();

  if (isLoading) {
    return <LoadingCircle src={"/icons/loading-circle.svg"}></LoadingCircle>;
  }

  if (isError) {
    console.error(error);
    return <div>Error: {error.message}</div>;
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
