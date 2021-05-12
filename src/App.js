import { Container, Form, Button } from "react-bootstrap";
import React from "react";
import axios from "axios";
import "./styles.css";

export default class App extends React.Component {
  state = {
    address: "",
    result: "",
    price: ""
  };

  get = (address) => {
    axios
      .get(
        "https://api.etherscan.io/api?module=account&action=balance&address=" +
          address +
          "&tag=latest&apikey=XT2IBW3VGV2HJVKY7VIXSKHJ2G48GFG64Z"
      )
      .then((response) => {
        this.setState({ result: response.data.result / 1000000000000000000 });
        //console.log(response.data.result);
        //console.log(response);
      });

    axios
      .get(
        "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=XT2IBW3VGV2HJVKY7VIXSKHJ2G48GFG64Z"
      )
      .then((resp) => {
        this.setState({ price: resp.data.result.ethusd });
        //console.log(resp);
      });
  };

  onSubmit = () => {
    this.get(this.state.address);
    //console.log(this.state);
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
                pattern="^0x[a-fA-F0-9]{40}$"
              >
                Find Address
              </Button>
            </Form>
            <div className="bal mt-2">
              Balance:{" "}
              <span className="special">
                {Number(this.state.result).toFixed(4)}
              </span>{" "}
              or{" "}
              <span className="special">
                {Number(this.state.result * this.state.price).toFixed(2)}
              </span>{" "}
              USD
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
