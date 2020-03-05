import React from "react";
import { shallow } from "enzyme";
import { Header } from "./Header";

describe("Header", () => {
  it("Renders the header with the correct className", () => {
    const headerWrapper = shallow(
      <Header textColor="grey" className="header-class" />
    );
    expect(headerWrapper.hasClass("header-class")).toEqual(true);
  });
});
