import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Header from "./Header";

describe("<Header />", () => {
  test("it renders the header", () => {
    const component = shallow(<Header />);

    expect(toJSON(component)).toMatchSnapshot();
  });

  test("it renders with logo color argument prop", () => {
    const color = "orange";

    const component = shallow(<Header color={color} />);

    expect(toJSON(component)).toMatchSnapshot();
  });
});
