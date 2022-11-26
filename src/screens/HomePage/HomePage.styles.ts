import styled from "styled-components";



export const StyledHeader = styled.article`
  display: flex;
  align-items: center;
  justify-content: end;

  button {
    margin-left: 1rem;
  }
`

export const StyledTable = styled.table `
  border-radius: 0.25rem;
  color: #000000;
  border: 1px solid #c2c4c9;
  padding: 2rem;
  margin: 0.75rem 0;
  width: 100%;
  text-align: left;
  border-collapse:separate;
  border-spacing:0 5px;

  thead {
    th {
      border-bottom: 2px solid #000000;
    }
  }

  tbody {
    td {
      border-bottom: 1px solid #c2c4c9;
    }
  }
  
  th, td {
    padding: 0.5rem;
    white-space: nowrap;
    position: relative;

    strong {
      font-weight: bold;
    }
  }

  .actions {
    display: flex;
  }
`