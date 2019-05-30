import React from "react";
import { shallow } from "enzyme";
import NotFound from "../../components/NotFound";

test("Should render the Not Found component", () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper).toMatchSnapshot();
});
