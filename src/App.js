import React, { useState } from "react";
import "./App.css";
import Button from "./component/Button";
import Input from "./component/Input";
import Label from "./component/Label";
import Radio from "./component/Radio";
import Select from "./component/Select";
import Table from "./component/Table";
import { connect } from "react-redux";

let list = [];
function App(props) {
  const [name, setName] = useState("");
  const [eamil, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [select, setSelect] = useState("");
  const [passwd, setPasswd] = useState("");

  return (
    <div className="container">
      <h2 className="text-center">Form Registration</h2>
      <br />
      <Input
        type="text"
        placeholder="Your Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <br />
      <Input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <Input
        type="date"
        placeholder="Your DOB"
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <br />
      <Label msg="Select Gender" />
      <br />
      <Label msg="Male" />
      <Radio
        type="radio"
        value="male"
        checked={gender === "male"}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      <Label msg="Female" />
      <Radio
        type="radio"
        value="female"
        checked={gender === "female"}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      />
      <br />
      <Label msg="Select Education" />
      <select
        className="form-select"
        onChange={(e) => {
          setSelect(e.target.value);
        }}
      >
        <Select s="selected" msg="Choose Education" />
        <Select msg="Graduation" />
        <Select msg="Post Graduation" />
        <Select msg="Under Graduation" />
      </select>
      <br />
      <Input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPasswd(e.target.value);
        }}
      />
      <br />
      <Button
        msg="Submit"
        onClick={() => {
          props.changeName(
            name,
            eamil,
            date,
            gender,
            select,
            props.Myname.list,
            list,
            passwd
          );
        }}
      />
      <br />
      <div>
        <Table
          data={props.Myname.list}
          onDelete={(index) => {
            props.delet(props.Myname.list, index);
          }}
          onEdit={(index) => {
            props.edit(
              props.Myname.list,
              index,
              name,
              eamil,
              date,
              gender,
              select
            );
          }}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    Myname: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: (name, email, date, gender, select, list) => {
      list.push({
        name: name,
        email: email,
        date: date,
        gender: gender,
        select: select,
      });
      dispatch({
        type: "SUBMIT",
        payload: {
          name: name,
          email: email,
          date: date,
          gender: gender,
          select: select,
          list: list,
        },
      });
    },
    delet: (list, index) => {
      list.splice(index, 1);

      dispatch({
        type: "DELETE",
        payload: {
          list: list,
        },
      });
    },
    edit: (list, index, name, email, date, gender, select) => {
      list[index].name = name;
      list[index].email = email;
      list[index].date = date;
      list[index].gender = gender;
      list[index].select = select;

      dispatch({
        type: "EDIT",
        payload: {
          list: list,
        },
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
