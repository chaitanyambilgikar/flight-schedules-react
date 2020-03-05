import React from "react";
import { shallow } from "enzyme";
import { Content } from './Content';

describe('Cotent', () => {
  it('Render the Content block', () => {
    const ContentWrapper = shallow(
      <Content className="content" />
    );
    expect(ContentWrapper.hasClass("content")).toEqual(true);
  });
});