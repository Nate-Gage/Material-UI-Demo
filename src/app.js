//App.js

import React from "react";
import CustomerList from "./CustomerList";
import customerArray from "../data.json";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: customerArray.data,
      active: null
    };
  }
  componentDidMount() {
    fetch(customerArray).then(() => {
      console.log(this.state.customers);
    });

    document.addEventListener("click", e => {
      var targetElement = e.target;

      do {
        if (
          targetElement.className != null &&
          targetElement.className.includes("card")
        ) {
          return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);

      var elements = document.getElementsByClassName("card");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.background = "white";
      }
    });
  }
  setColor = position => {
    if (this.state.active === position) {
      return "#99ccff";
    }
    return "";
  };
  setActive = position => {
    if (this.state.active === position) {
      this.setState({ active: null });
    } else {
      this.setState({ active: position });
    }
  };
  handleFilter = e => {
    if (e.target.checked) {
      this.setState(() => ({
        customers: customerArray.data.filter(item => {
          return item.age <= 35;
        })
      }));
    } else {
      this.setState(() => ({
        customers: customerArray.data
      }));
    }
    console.log(this.state.customers);
  };
  render() {
    return (
      <div>
        <CustomerList
          showCustomers={this.state.customers}
          setActive={this.setActive}
          handleFilter={this.handleFilter}
          setColor={this.setColor}
        />
      </div>
    );
  }
}


