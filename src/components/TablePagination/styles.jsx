import styled, { css }from 'styled-components';

export const DivTable = styled.div`
  font-weight: normal;
  background-color: #fff;
  font-family: arial, sans-serif;
  padding-bottom: 2px;
  text-align: center;
  span {
    font-weight: normal;
    /* margin: 0; */
  }

`;

export const Table = styled.table`
  margin-top: 0px;
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
        color: white;
        background-color: var(--azul-escuro);
        opacity: 0.8;
        transition: 0.15s;
        font-weight: 600;
      }
    `}
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--azul-escuro);
    font-weight: 400;
    border: thin solid var(--azul-escuro);
  }
  
`;