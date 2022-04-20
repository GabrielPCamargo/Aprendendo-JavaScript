import styled from 'styled-components';
import { primaryColor } from '../../config/color';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.8);
  }

  .c-loader {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: ${primaryColor};
    height: 50px;
    width: 50px;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }

  span {
    z-index: 2;
  }
`;
