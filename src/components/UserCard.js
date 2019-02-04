import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import styled from "styled-components";
const { Meta } = Card;

const Wrapper = styled.div`
  margin: 0 10px;
`;

const UserCard = props => (
  <Wrapper>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={props.photo} />}
    >
      <Meta title={props.name} description={props.lastname} />
    </Card>
  </Wrapper>
);

UserCard.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  lastname: PropTypes.string
};

export default UserCard;
