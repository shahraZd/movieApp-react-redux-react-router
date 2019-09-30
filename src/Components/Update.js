import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { updateMovie } from "../actions";

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

  handleUpdate = () => {
    this.props.update(this.props.movie.id, {
      title: this.state.title,
      img: this.state.img,
      desc: this.state.desc,
    });
    this.toggle();
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-outline-warning"
          onClick={() => {
            this.setState({
              title: this.props.movie.title,
              img: this.props.movie.img,
              desc: this.props.movie.desc,
            });
            this.toggle();
          }}
        >
          Update
        </button>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Update Movie</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input
                  type="text"
                  value={this.state.title}
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
                  value={this.state.img}
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
                  value={this.state.desc}
                  name="desc"
                  id="description"
                  placeholder="movie Description"
                  onChange={e => this.handleChange(e)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleUpdate}>
              SAVE
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
  update: (id, movie) => dispatch(updateMovie(id, movie)),
});

export default connect(
  null,
  MDTP
)(Add);
