import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import ContactForm from "./ContactForm";

describe("<ContactForm />", () => {
  test("it renders the contact form", () => {
    const component = shallow(<ContactForm />);
    expect(toJSON(component)).toMatchSnapshot();
  });

  // When DOM error styling is introduced for the inputs, I want to simulate different input
  // combinations off of the form submit to check that they return the correct alert values
});
