import React, { Component } from 'react';
class NewRoomForm extends Component {
  constructor() {
    super();
    this.state = { roomName: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ roomName: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRoom(this.state.roomName);
    this.setState({ roomName: '' });
  }

  render() {
    return (
      <div className='new-room-form'>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type='text'
            placeholder='Create a room'
            value={this.state.roomName}
            required
          />
          <button id='create-room-btn' type='submit'>
            +
          </button>
        </form>
      </div>
    );
  }
}

export default NewRoomForm;
