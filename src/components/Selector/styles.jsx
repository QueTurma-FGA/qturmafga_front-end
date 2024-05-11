import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.width};
  color: #484848;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 500;
  font-size: 14px;
  span { //title
    font-size: 16px;
  }
`;