import { React, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { HiChevronDoubleDown } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillPhone, AiOutlineUser, AiTwotoneMail } from "react-icons/ai";
import { FaAddressBook, FaBirthdayCake } from "react-icons/fa";
import Datetime from "react-datetime";
import moment from "moment";

const ProfileFunctional = ({ data }) => {
  const [show, setShow] = useState("");
  const [field, setField] = useState("");

  return (
    <div>
      {data.map((users) => (
        <Container key={users.login.uuid}>
          {users.picture != null ? (
            <Row className="mb-4 mt-2 justify-content-center">
              <Col xs={6} md={4}>
                <Image src={users.picture.large} roundedCircle />
              </Col>
            </Row>
          ) : (
            <Row className="mb-4">
              <Col xs={6} md={4}>
                <Image src="holder.js/171x180" roundedCircle />
              </Col>
            </Row>
          )}
          <Row className="mb-4">
            <p>{field}</p>
            <h3>{show}</h3>
          </Row>
          <Row>
            <Col>
              <RiLockPasswordFill
                onMouseOver={({ target }) => {
                  target.style.color = "green";
                  setShow(users.login.password);
                  setField("My Password is");
                }}
                onMouseOut={({ target }) => {
                  target.style.color = "black";
                }}
                size={60}
              />
            </Col>
            <Col>
              <AiFillPhone
                onMouseOver={({ target }) => {
                  target.style.color = "green";
                  setShow(users.phone);
                  setField("My phone number is");
                }}
                onMouseOut={({ target }) => {
                  target.style.color = "black";
                }}
                size={60}
              />
            </Col>
            <Col>
              <FaAddressBook
                onMouseOver={({ target }) => {
                  target.style.color = "green";
                  setShow(
                    users.location.street.name +
                      " " +
                      users.location.street.number
                  );
                  setField("My address is");
                }}
                size={60}
                onMouseOut={({ target }) => {
                  target.style.color = "black";
                }}
              />
            </Col>
            <Col>
              <FaBirthdayCake
                onMouseOver={({ target }) => {
                  target.style.color = "green";
                  setShow(moment(users.dob.date).format("DD/MM/YYYY"));
                  setField("My birthday is");
                }}
                size={60}
                onMouseOut={({ target }) => {
                  target.style.color = "black";
                }}
              />
            </Col>
            <Col>
              <AiOutlineUser
                onMouseOver={({ target }) => {
                  target.style.color = "green";
                  setShow(
                    users.name.title +
                      " " +
                      users.name.first +
                      " " +
                      users.name.last
                  );
                  setField("My name is");
                }}
                size={60}
                onMouseOut={({ target }) => {
                  target.style.color = "black";
                }}
              />
            </Col>
            <Col>
              <AiTwotoneMail
                onMouseOver={({ target }) => {
                  target.style.color = "green";
                  setShow(users.email);
                  setField("My email is");
                }}
                size={60}
                onMouseOut={({ target }) => {
                  target.style.color = "black";
                }}
              />
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default ProfileFunctional;
