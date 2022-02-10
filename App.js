import React, { component } from "react";
import { Component } from "react/cjs/react.production.min";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value,
    });
  }
  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    //copy of current list items
    const list = [...this.state.list];

    //add new Item to list

    list.push(newItem);

    //update state with new list and reset newItem inpus
    this.setState({
      list,
      newItem: "",
    });
  }

  deleteItem(id) {
    //copy current list item
    const list = [...this.state.list];

    //filter out item being deleted

    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="App">
        <h1>Shopping List</h1>
        <br />
        <input
          type="text"
          placeholder="Type item here..."
          value={this.state.newItem}
          onChange={(e) => this.updateInput("newItem", e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => this.addItem()}>
          Add
        </button>
        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  className="btn btn-danger rounded-pill m-2"
                  onClick={() => this.deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
