import { Container, Form, Button } from "react-bootstrap";
import React from "react";
import axios from "axios";
import "./styles.css";
require("dotenv").config();

function get(address) {
  axios
    .get(
      "https://api.etherscan.io/api?module=account&action=balance&address=" +
        address +
        "&tag=latest&apikey=XT2IBW3VGV2HJVKY7VIXSKHJ2G48GFG64Z"
    )
    .then(function (response) {
      console.log(response);
      this.setState((state) => {
      });
      console.log(this.result);
    });

  axios
    .get("https://api.etherscan.io/api?module=stats&action=ethprice&apikey=XT2IBW3VGV2HJVKY7VIXSKHJ2G48GFG64Z")
    .then(function (resp) {
      console.log(resp);
    });
}

export default class App extends React.Component {
  state = {
    address: "",
    result: 0,
    price: 0
  };

  onSubmit = () => {
    console.log(this.state);
    get(this.state.address);
  };

  render() {
    return (
      <Container fluid>
        <div className="center d-inline-flex">
          <div className="l">
            <div>
              <h1 className="h2 mb-3">Ethereum Blockchain Explorer</h1>
              <p>
                Ethereum blockchain explorer built using React and Bootstrap.
              </p>
            </div>
            <Form className="">
              <Form.Label>Ethereum address</Form.Label>
              <Form.Control
                pattern="^0x[a-fA-F0-9]{40}$"
                type="text"
                placeholder="Enter a valid Ethereum address"
                value={this.state.address}
                onChange={(e) => this.setState({ address: e.target.value })}
              />
              <Button
                onClick={() => this.onSubmit()}
                variant="primary"
                className="mt-3 w-100"
              >
                Find Address
              </Button>
            </Form>
            <div>
              Balance: <span>{this.result}</span>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
