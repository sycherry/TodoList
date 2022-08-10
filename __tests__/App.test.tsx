import React from "react";
import { render } from '@testing-library/react-native'
import App from "../App";
import '@testing-library/jest-native/extend-expect';

describe("Authetication screens test", () => {
  it("When starting, user is shown authentication screen", async () => {
    const { getByText, toJSON } = render(<App />)
    const text = getByText('Set Authentication to Proceed')
    expect(text).toHaveTextContent('Set Authentication to Proceed');
    expect(toJSON()).toMatchSnapshot()
  });
});