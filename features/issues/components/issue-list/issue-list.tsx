import { useRouter } from "next/router";
import styled from "styled-components";
import { color, space, textFont, breakpoint } from "@styles/theme";
import { ProjectLanguage } from "@api/projects.types";
import { useProjects } from "@features/projects";
import { useGetIssues } from "../../api";
import { IssueRow } from "./issue-row";
import { Checkbox, CheckboxSize } from "@features/ui";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIssues } from "store";

const Container = styled.div`
  background: white;

  box-sizing: border-box;

  overflow: hidden;

  @media (min-width: ${breakpoint("desktop")}) {
    border: 1px solid ${color("gray", 200)};
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
      0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    border-radius: ${space(2)};
  }
`;

const Table = styled.table`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoint("desktop")}) {
    display: table;
    width: 100%;
    border-collapse: collapse;
  }
`;

const HeaderRow = styled.tr`
  border-bottom: 1px solid ${color("gray", 200)};

  @media (min-width: ${breakpoint("desktop")}) {
    display: table-row;
  }
`;

const HeaderCell = styled.th`
  display: none;
  padding: ${space(3, 6)};
  text-align: left;
  color: ${color("gray", 500)};
  ${textFont("xs", "medium")};

  @media (min-width: ${breakpoint("desktop")}) {
    display: table-cell;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space(4, 6)};
  border-top: 1px solid ${color("gray", 200)};
`;

const PaginationButton = styled.button`
  height: 38px;
  padding: ${space(0, 4)};
  background: white;
  border: 1px solid ${color("gray", 300)};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;

  &:not(:first-of-type) {
    margin-left: ${space(3)};
  }
`;

const PageInfo = styled.div`
  color: ${color("gray", 700)};
  ${textFont("sm", "regular")}
`;

const PageNumber = styled.span`
  ${textFont("sm", "medium")}
`;

export function IssueList() {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const navigateToPage = (newPage: number) =>
    router.push({
      pathname: router.pathname,
      query: { page: newPage },
    });

  const issuesPage = useGetIssues(page);
  const projects = useProjects();
  const issues = useSelector((state: any) => state.issues);
  const dispatch = useDispatch();
  const projectIdToLanguage = (projects.data || []).reduce(
    (prev, project) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>
  );
  const { items, meta } = issuesPage.data || {};

  useEffect(() => {
    dispatch(setIssues(items));
  }, []);

  if (projects.isLoading || issuesPage.isLoading) {
    return <div>Loading</div>;
  }

  if (projects.isError) {
    console.error(projects.error);
    return <div>Error loading projects: {projects.error.message}</div>;
  }

  if (issuesPage.isError) {
    console.error(issuesPage.error);
    return <div>Error loading issues: {issuesPage.error.message}</div>;
  }

  return (
    <Container>
      <Table>
        <thead>
          <HeaderRow>
            <HeaderCell>
              <Checkbox size={CheckboxSize.md} />
            </HeaderCell>
            <HeaderCell>Issue</HeaderCell>
            <HeaderCell>Graph : 14d</HeaderCell>
            <HeaderCell>Level</HeaderCell>
            <HeaderCell>Events</HeaderCell>
            <HeaderCell>Users</HeaderCell>
          </HeaderRow>
        </thead>
        <tbody>
          {issues == null
            ? (items || []).map((issue) => (
                <IssueRow
                  key={issue.id}
                  issue={issue}
                  projectLanguage={projectIdToLanguage[issue.projectId]}
                />
              ))
            : (issues || []).map((issue: any) => (
                <IssueRow
                  key={issue.id}
                  issue={issue}
                  projectLanguage={projectIdToLanguage[issue.projectId]}
                />
              ))}
        </tbody>
      </Table>
      <PaginationContainer>
        <div>
          <PaginationButton
            onClick={() => navigateToPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </PaginationButton>
          <PaginationButton
            onClick={() => navigateToPage(page + 1)}
            disabled={page === meta?.totalPages}
          >
            Next
          </PaginationButton>
        </div>
        <PageInfo>
          Page <PageNumber>{meta?.currentPage}</PageNumber> of{" "}
          <PageNumber>{meta?.totalPages}</PageNumber>
        </PageInfo>
      </PaginationContainer>
    </Container>
  );
}
