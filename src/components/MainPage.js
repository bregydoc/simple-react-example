import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonB from "./Button";
import Modal from "./Modal";
import styled from "styled-components";
import { Query, Mutation } from "react-apollo";

import { GET_PERSONS, CREATE_PERSON } from "../queries";
import UserCard from "./UserCard";
import { Input } from "antd";
import { Upload, message, Button, Icon } from "antd";
const Users = styled.div`
  display: flex;
  margin: 20px 30px;
`;

const NewPersonWrapper = styled.div`
  margin: 30px;
  padding: 20px;
  border: solid #0053c9 2px;
  border-radius: 4px;
`;

class MainPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    modalActive: false,
    name: "",
    lastname: "",
    photo: ""
  };

  showModal = () => {
    this.setState(s => {
      return {
        ...s,
        modalActive: true
      };
    });
  };

  hideModal = () => {
    this.setState(s => {
      return {
        ...s,
        modalActive: false
      };
    });
  };

  onChangeName = e => {
    const value = e.target.value;
    this.setState(s => {
      return { ...s, name: value };
    });
  };

  onChangeLastName = e => {
    const value = e.target.value;
    this.setState(s => {
      return { ...s, lastname: value };
    });
  };

  render() {
    let self = this;
    const props = {
      name: "file",
      action: "//jsonplaceholder.typicode.com/posts/",
      headers: {
        authorization: "authorization-text"
      },
      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
          self.setState(s => {
            return { ...s, photo: "https://via.placeholder.com/150/92c952" };
          });
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };

    return (
      <div>
        <Modal
          active={this.state.modalActive}
          onClose={this.hideModal}
          onAccept={() => {
            alert("you accepted");
            this.hideModal();
          }}
        >
          <div>Hello, I'm modal</div>
        </Modal>
        <div>Hello world</div>
        <Users>
          <Query query={GET_PERSONS}>
            {({ loading, error, data }) => {
              if (error) return <div>Error {error.toString()}</div>;
              if (loading || !data) return <div>Loading...</div>;
              return data.persons.map(person => (
                <UserCard
                  key={person.id}
                  photo={person.photo}
                  name={person.name}
                  lastname={person.lastname}
                />
              ));
            }}
          </Query>
        </Users>
        <ButtonB
          normalColor={"#01E79F"}
          activeColor={"#00B87F"}
          onClick={() =>
            this.state.modalActive ? this.hideModal() : this.showModal()
          }
        >
          CLICK ME
        </ButtonB>
        <NewPersonWrapper>
          <Mutation
            mutation={CREATE_PERSON}
            update={(cache, { data: { createPerson } }) => {
              const { persons } = cache.readQuery({ query: GET_PERSONS });
              cache.writeQuery({
                query: GET_PERSONS,
                data: { persons: persons.concat([createPerson]) }
              });
            }}
          >
            {createPerson => (
              <div>
                <Input
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
                <Input
                  placeholder="Lastname"
                  value={this.state.lastname}
                  onChange={this.onChangeLastName}
                />
                <Upload {...props}>
                  <Button>
                    <Icon type="upload" /> Click to Upload
                  </Button>
                </Upload>

                <Button
                  onClick={() => {
                    console.log(this.state);
                    createPerson({
                      variables: {
                        name: this.state.name,
                        lastname: this.state.lastname,
                        photo: this.state.photo
                      }
                    });
                  }}
                >
                  Create Person
                </Button>
              </div>
            )}
          </Mutation>
        </NewPersonWrapper>
      </div>
    );
  }
}

export default MainPage;
