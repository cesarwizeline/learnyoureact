import React from 'react';
import PropTypes from 'prop-types';

export default class TodoBox extends React.Component {
  render() {
    return (
      <div className="todoBox">
        <h1>Todos</h1>
        <TodoList />
        <TodoForm />
      </div>
    );
  }
}
class TodoList extends React.Component {
  render() {
    return (
      <div className="todoList">
        <table style={style}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
            <Todo title="Learn React">15:00</Todo>
          </tbody>
        </table>
      </div>
    );
  }
}
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
    };
  }
  handleChange() {
    this.setState({ checked: !this.state.checked });
  }
  render() {
    return (
      <tr>
        <td style={{ border: '1px solid black;' }}>
          <input
            type="checkbox"
            // checked={this.state.checked}
            onChange={this.handleChange.bind(this)}
          />
        </td>
        <td style={{ border: '1px solid black;' }}>{this.props.title}</td>
        <td style={{ border: '1px solid black;' }}>{this.props.children}</td>
      </tr>
    );
  }
}
Todo.propTypes = {
  title: PropTypes.string.isRequired,
};
// class TodoList extends React.Component {
//   render() {
//     return <div className="todoList">I am a TodoList.</div>;
//   }
// }
class TodoForm extends React.Component {
  render() {
    return <div className="todoForm">I am a TodoForm.</div>;
  }
}

let style = {
  border: '2px solid black;',
};
