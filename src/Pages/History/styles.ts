import styled from "styled-components";

export const HistoryContainer = styled.main`
  padding: 3.5rem;

  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    color: ${(props) => props.theme["gray-100"]};
    font-size: 1.5rem;
  }
`;

export const HistoryList = styled.div`
  margin-top: 2rem;
  flex: 1;
  overflow: auto;

  table {
    width: 100%;
    min-width: 600px;
    /* Não execução da soma das bordas: */
    border-collapse: collapse;

    th {
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      background-color: ${(props) => props.theme["gray-600"]};
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      padding: 1rem;

      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};

      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;

const STATUS_COLORS = {
  yellow: "yellow-500",
  red: "red-500",
  green: "green-500",
} as const;

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  &::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;

    border-radius: 50%;

    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
  }
`;
