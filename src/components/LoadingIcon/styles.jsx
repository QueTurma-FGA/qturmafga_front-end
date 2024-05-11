import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }  to {
    transform: rotate(360deg);
  }
`;

export const DivLoadingIcon = styled.div`
  ${(props) => props.loading && css`
    > svg {
      animation: ${rotate} 1.5s linear infinite;
    }
  `}
`;