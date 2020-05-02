// import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

export interface Component {
  [key: string]: any;
}

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
