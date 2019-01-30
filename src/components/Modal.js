import React from "react";
import PropTypes from "prop-types";
import styled, { css, keyframes } from "styled-components";
import Button from "./Button";

const inAnimation = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 100%;
    }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  ${props => {
    if (!props.active) {
      return css`
        display: none;
      `;
    }
  }}
`;

const Background = styled.div`
  width: 100%;
  height: 100%;

  animation: ${inAnimation} 0.5s;

  ${props => {
    if (props.active) {
      return css`
        background-color: #000000bb;
      `;
    } else {
      return css`
        display: none;
      `;
    }
  }}
`;

const Content = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-flow: column;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const Modal = props => {
  return (
    <Wrapper active={props.active}>
      <Background active={props.active} onClick={() => props.onClose()} />
      <Content>
        {props.children}
        <Button onClick={props.onAccept}>CONTINUE</Button>
      </Content>
    </Wrapper>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  active: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func
};

export default Modal;
