import styled, { css }from 'styled-components';

// interface TableProps {
//   borderRadius?: boolean;
//   grid?: boolean;
//   rowClick?: boolean;
//   cellspacing?: string;
//   actions?: boolean;
// }

export const DivTable = styled.div`
  font-weight: normal;
  background-color: #fff;
  font-family: arial, sans-serif;
  padding-bottom: 2px;

  /* tr td{
    border: 1px solid var(--azul-escuro);
    border-collapse: collapse;
    padding: 11px 0px;
    color: var(--azul-escuro);
    font-weight: bold;
} */
`;

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-spacing:0;
  border-collapse: collapse;

  ${(props) => props.borderRadius && css`
    th:first-child {
      border-radius: 8px 0 0 0;    
    }
    th:last-child {
      border-radius: 0 8px 0 0;    
    }
  `}

  
  td, th {
    ${(props) => props.grid && css`
      border: 1px solid #dddddd;
    `}
    white-space: nowrap;
    text-align: left;
    padding: ${props => props.actions ? '2px 6px' : '10px 6px'};
  }
  
  th {
    border-top: 0;
    background-color: #fff;
    padding: 8px;
  }

  /* tr:nth-child(2n+1) {
    background-color: #F8F9FA;
  } */

  tr {
    ${(props) => props.rowClick && css`
      &:hover {
        cursor: pointer;
        background: var(--azul-escuro);
        color: #fff;
        opacity: 0.8;
      }
    `}
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--azul-escuro);
    font-weight: bold;
    border: 1px solid var(--azul-escuro);
  }
  
`;