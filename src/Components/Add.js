import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { addMovie } from "../actions";
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      img: "",
      desc: "",
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleAdd = () => {
    this.props.add({
      id:Math.random()+"",
      title: this.state.title,
      img: this.state.img,
      desc: this.state.desc,
    });
    this.toggle();
  };

  render() {
    return (
      <div>
        <i class="fas fa-plus-circle text-primary" onClick={this.toggle}></i>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Movie</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="movie Title"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="image">image</Label>
                <Input
                  type="text"
                  name="img"
                  id="image"
                  placeholder="movie image"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="textarea"
                  name="desc"
                  id="description"
                  placeholder="movie Description"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleAdd}>
              ADD
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const MDTP = dispatch => ({
  add: m => dispatch(addMovie(m)),
});

export default connect(
  null,
  MDTP
)(Add);
