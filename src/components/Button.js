import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${props => props.normalColor};
  width: fit-content;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 5px 10px;
  -webkit-box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.18);
  box-shadow: 0px 2px 9px 1px rgba(0, 0, 0, 0.18);

  transition: 0.3s;

  :hover {
    background-color: ${props => props.activeColor};
    cursor: pointer;
    transform: translateY(2px);
  }
`;

const Button = props => {
  return (
    <Wrapper
      normalColor={props.normalColor}
      activeColor={props.activeColor}
      onClick={props.onClick}
    >
      <div> {props.children}</div>
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  normalColor: PropTypes.string,
  activeColor: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;
