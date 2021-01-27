import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Button from "./Button";

describe("<Button />", () => {
  test("it should render correctly", () => {
    const component = shallow(<Button />);

    expect(toJSON(component)).toMatchSnapshot();
  });
  test("it should render button with correct string text and color", () => {
    const string = "Submit";
    const color = "btn-orange";

    const component = shallow(<Button message={string} color={color} />);

    expect(toJSON(component)).toMatchSnapshot();
  });
});
