import styled from "styled-components";
import capitalize from "lodash/capitalize";
import { color, space, textFont, breakpoint } from "@styles/theme";
import {
  Checkbox,
  CheckboxSize,
  Badge,
  BadgeColor,
  BadgeSize,
} from "@features/ui";
import { ProjectLanguage } from "@api/projects.types";
import { IssueLevel } from "@api/issues.types";
import type { Issue } from "@api/issues.types";

type IssueRowProps = {
  projectLanguage: ProjectLanguage;
  issue: Issue;
};

const levelColors = {
  [IssueLevel.info]: BadgeColor.success,
  [IssueLevel.warning]: BadgeColor.warning,
  [IssueLevel.error]: BadgeColor.error,
};

const Row = styled.tr`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  border: 1px solid ${color("gray", 200)};
  box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1),
    0px 2px 4px -2px rgba(16, 24, 40, 0.06);
  border-radius: ${space(2)};
  margin-bottom: 16px;
  gap: 8px;

  & > td {
    order: 3;
    margin: auto;

    & img {
      width: 100%;
    }
  }

  @media (min-width: ${breakpoint("desktop")}) {
    display: table-row;
    &:nth-child(2n) {
      background: ${color("gray", 50)};
    }
    & > td {
      order: 2;
    }
  }
`;

const Cell = styled.td`
  display: block;
  color: ${color("gray", 500)};
  ${textFont("sm", "regular")};
  &.cell-chart img:nth-child(1) {
    display: none;
  }

  &.cell-chart img:nth-child(2) {
    display: block;
  }

  @media (min-width: ${breakpoint("desktop")}) {
    display: table-cell;
    padding: ${space(4, 6)};

    &.cell-chart img:nth-child(1) {
      display: block;
    }

    &.cell-chart img:nth-child(2) {
      display: none;
    }
  }
`;

const IssueCell = styled(Cell)`
  display: flex;
  align-items: center;
`;

const LanguageIcon = styled.img`
  width: ${space(10)};
  margin-right: ${space(3)};
  padding-left: 12px;

  @media (min-width: ${breakpoint("desktop")}) {
    padding-left: 0px;
  }
`;

const ErrorTypeAndMessage = styled.div`
  color: ${color("gray", 900)};
`;

const ErrorType = styled.span`
  ${textFont("sm", "medium")}
`;

const Label = styled.p`
  color: ${color("gray", 500)};
  ${textFont("sm", "medium")};
  margin: 0;
`;

export function IssueRow({ projectLanguage, issue }: IssueRowProps) {
  const { name, message, stack, level, numEvents, numUsers } = issue;
  const firstLineOfStackTrace = stack.split("\n")[1];

  return (
    <Row>
      <div
        style={{ display: "flex", alignItems: "center", padding: "12px 0px" }}
      >
        <Cell>
          <Checkbox size={CheckboxSize.md} />
        </Cell>
        <IssueCell>
          <LanguageIcon
            src={`/icons/${projectLanguage}.svg`}
            alt={projectLanguage}
          />
          <div>
            <ErrorTypeAndMessage>
              <ErrorType>{name}:&nbsp;</ErrorType>
              {message}
            </ErrorTypeAndMessage>
            <div>{firstLineOfStackTrace}</div>
          </div>
        </IssueCell>
      </div>

      <Cell className="cell-chart">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/chart.png" alt="chart" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/chart-mobile.png" alt="chart-mobile" />
      </Cell>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Label>Status</Label>
          <Cell>
            <Badge color={levelColors[level]} size={BadgeSize.sm}>
              {capitalize(level)}
            </Badge>
          </Cell>
        </div>
        <div style={{ textAlign: "center" }}>
          <Label>Events</Label>
          <Cell>{numEvents}</Cell>
        </div>
        <div style={{ textAlign: "center" }}>
          <Label>Users</Label>
          <Cell>{numUsers}</Cell>
        </div>
      </div>
    </Row>
  );
}
