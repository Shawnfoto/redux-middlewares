import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "../Root";
import App from "../components/App";

beforeEach(() => {
  moxios.install();
  moxios.stubRequest("https://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display then", done => {
  // Attempt to render the entire App
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  //   find the 'fetchComments' button and click it
  wrapped.find(".fetch-comments").simulate("click");

  //   expect to find a list of comments
  //   tiny little pause
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find("li").length).toEqual(2);
    // because test run settimeout is fast run out, so must be done(), it can end
    done();
    wrapped.unmount();
  });
});
