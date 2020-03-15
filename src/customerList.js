import React from "react";
import "../src/styles.css";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const CustomerList = props => {
  const customers = props.showCustomers;

  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="filterCustomers"
          onChange={props.handleFilter}
        />
        <p id="filterText"> Filter Customers by Age (35 or younger)</p>
      </div>
      <br />
      {customers.map((item, index) => {
        return (
          <div key={index} id="cardDiv">
            <Card>
              <CardContent
                className="card"
                id={index}
                onClick={() => props.setActive(index)}
                style={{ background: props.setColor(index) }}
              >
                <Typography className="customerTitle" gutterBottom>
                  {item.name} | Age: {item.age}
                </Typography>
                <Typography variant="h5" component="h2" />
                <Typography color="textSecondary">
                  Company: {item.company.name}
                </Typography>
                <Typography
                  className="catchPhrase"
                  variant="body2"
                  color="textSecondary"
                >
                  "{item.company.catchPhrase}"
                  <br />
                </Typography>
              </CardContent>
            </Card>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default CustomerList;