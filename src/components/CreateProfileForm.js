import React from "react";
import { Input, Picklist, PicklistOption } from "react-rainbow-components";

class CreateProfileForm extends React.Component {
  state = {
    first_name: "",
    email: "",
    birthdate: "",
    location: "",
    relationship_goal: "",
    blood_type: "",
    image_url: ""
  };

  changeHandler(value) {
    console.log(value);
  }

  render() {
    return (
      <div>
        <Input
          id="input-component-1"
          label="first name"
          placeholder="first name"
        />
        <br />
        <Input id="input-component-2" label="location" placeholder="location" />
        <br />
        <Input label="birthdate" type="date" />
        <br />
        <Picklist
          id="picklist-1"
          placeholder="blood type"
          // onChange={(value) => setState({ value })}
          // value={state.value}
          label="blood type"
          // hideLabel
        >
          <PicklistOption name="O+" label="O+" />
          <PicklistOption name="O-" label="O-" />
          <PicklistOption name="A+" label="A+" />
          <PicklistOption name="A-" label="A-" />
          <PicklistOption name="B+" label="B+" />
          <PicklistOption name="B-" label="B-" />
          <PicklistOption name="AB+" label="AB+" />
          <PicklistOption name="AB-" label="AB-" />
        </Picklist>{" "}
        <br />
        <Picklist
          id="picklist-3"
          placeholder="relationship sought"
          // onChange={(value) => setState({ value })}
          // value={state.value}
          label="relationship sought"
          // hideLabel
        >
          <PicklistOption name="short term" label="short term" />
          <PicklistOption name="long term" label="long term" />
        </Picklist>
        <br />
        <Input
          label="Input Url"
          placeholder="https://react-rainbow-components.com"
          type="url"
        />
      </div>
    );
  }
}

export default CreateProfileForm;
