import React from "react";
import { render, waitFor } from '@testing-library/react-native'
import App from "../App";
import '@testing-library/jest-native/extend-expect';

describe("Authetication screens test", () => {
  it("When starting, user is shown authentication screen", async () => {
    const { getByText } = render(<App />)
    await waitFor(() => getByText('Set Authentication to Proceed'));
  });
});