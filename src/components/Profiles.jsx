import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { HiChevronDoubleDown } from "react-icons/hi";
import {RiLockPasswordFill} from "react-icons/ri"
import {AiFillPhone} from "react-icons/ai"
import {FaAddressBook} from "react-icons/fa"
import Datetime from 'react-datetime';

class Profiles extends React.Component {
  state = { show: "", field: "" };

  render() {
    return (
      <div>
        {this.props.user.map((users) => (
          <Container key={users.login.uuid}>
            {users.picture != null ? (
              <Row>
                <Col xs={6} md={4}>
                  <Image src={users.picture.large} roundedCircle />
                </Col>
                <p>{this.state.field}</p>
                <h3>{this.state.show}</h3>
              </Row>
            ) : (
              <Row>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" roundedCircle />
                </Col>
              </Row>
            )}
            <Row>
              <Col>
                <RiLockPasswordFill
                  onMouseOver={() =>
                    this.setState({
                      show: users.login.password,
                      field: "My passoword is:"
                    })
                  }
                />
              </Col>
              <Col>
                <AiFillPhone
                  onMouseOver={() =>
                    this.setState({ show: users.phone,
                    field: "My phone number is" })
                  }
                />
              </Col>
              <Col>
                <FaAddressBook
                  onMouseOver={() => this.setState({ show: users.location.street.name + " " + users.location.street.number,
                field: "My address is" })}
                />
              </Col>
              <Col>
                <HiChevronDoubleDown
                  onMouseOver={() => this.setState({ show: "no", field: "My birthday is" })}
                />
              </Col>
              <Col>
                <HiChevronDoubleDown
                  onMouseOver={() => this.setState({ show: users.name.title + " " + users.name.first + " " + users.name.last, field: "My name is" })}
                />
              </Col>
              <Col>
                <HiChevronDoubleDown
                  onMouseOver={() => this.setState({ show: users.email, field: "My email is" })}
                />
              </Col>
            </Row>
          </Container>
        ))}
      </div>
    );
  }
}

export default Profiles;
