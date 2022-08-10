import React from "react";
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { getEnrolledLevelAsync, authenticateAsync, hasHardwareAsync } from "expo-local-authentication";
import { Authentication } from "../screens/Authentication";
import '@testing-library/jest-native/extend-expect';

jest.mock("expo-local-authentication", () => ({
  authenticateAsync: jest.fn(),
  getEnrolledLevelAsync: jest.fn()
    .mockResolvedValueOnce(0)
    .mockResolvedValueOnce(2),
  hasHardwareAsync: jest.fn(),
  cancelAuthenticate: jest.fn()
}));

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn()
  },
  ...props
});

describe("Authetication screens test", () => {
  let props: any;
  props = createTestProps({});

  it("When user click button, check security level", async () => {
    const { getByTestId } = render(<Authentication {...props} />)
    const button = getByTestId('button')
    fireEvent.press(button)
    expect(getEnrolledLevelAsync).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(hasHardwareAsync).toHaveBeenCalledTimes(1)
      expect(authenticateAsync).toHaveBeenCalledTimes(0)
    });
  });

  it('When security level is 2 and click button, link to authenticate screen', async () => {
    const { getByTestId, toJSON } = render(<Authentication {...props} />);
    const button = getByTestId('button')
    getEnrolledLevelAsync();
    fireEvent.press(button)
    await waitFor(() => expect(authenticateAsync).toHaveBeenCalledTimes(1));
  });

});
