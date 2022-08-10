import React from "react";
import { fireEvent, render } from '@testing-library/react-native'
import { Home } from "../screens/Home";
import '@testing-library/jest-native/extend-expect';

describe("Home screens test", () => {

  it("When input is empty, the button desabled", async () => {
    const { getByTestId } = render(<Home />)
    const text = ''
    const input = getByTestId('input')
    fireEvent.changeText(input, text)
    const button = getByTestId('button')

    expect(button).toBeDisabled
  });

  it("User enters text in input, the button enabled", async () => {
    const { getByTestId } = render(<Home />)
    const text = 'Forth Item'
    const input = getByTestId('input')
    fireEvent.changeText(input, text)
    const button = getByTestId('button')

    expect(button).toBeEnabled
  });

  it("User create one item", async () => {
    const { getByTestId, getAllByTestId } = render(<Home />)
    const text = 'Forth Item'
    const input = getByTestId('input')
    const button = getByTestId('button')
    fireEvent.changeText(input, text)
    fireEvent.press(button)
    const forthList = getAllByTestId('list')[3]

    expect(forthList).toHaveTextContent('Forth Item');
    expect(button).toHaveTextContent('ADD');
    expect(button).toBeDisabled
  });

  it("User create two items", async () => {
    const { getByTestId, getAllByTestId } = render(<Home />)
    const text = 'Forth Item'
    const text2 = 'Fifth Item'
    const input = getByTestId('input')
    const button = getByTestId('button')

    fireEvent.changeText(input, text)
    fireEvent.press(button)
    fireEvent.changeText(input, text2)
    fireEvent.press(button)

    const forthList = getAllByTestId('list')[3]
    const fifthList = getAllByTestId('list')[4]

    expect(forthList).toHaveTextContent('Forth Item');
    expect(fifthList).toHaveTextContent('Fifth Item');
    expect(button).toHaveTextContent('ADD');
    expect(button).toBeDisabled
  });

  it("User remove first item", async () => {
    const { getAllByTestId, queryByText } = render(<Home />)
    const removeButton = getAllByTestId('delete')[0]
    fireEvent.press(removeButton);
    
    expect(queryByText('First Item')).toBeNull();
  });

  it("User create new item and then remove it", async () => {
    const { getByTestId, getAllByTestId, queryByText } = render(<Home />)
    const text = 'Forth Item'
    const input = getByTestId('input')
    fireEvent.changeText(input, text)
    const button = getByTestId('button')
    fireEvent.press(button)
    const removeButton = getAllByTestId('delete')[3]
    fireEvent.press(removeButton);

    expect(queryByText('Forth Item')).toBeNull();
  });

  it("User update first item", async () => {
    const { getAllByTestId, getByTestId } = render(<Home />)

    const firstList = getAllByTestId('list')[0]
    fireEvent.press(firstList)

    const button = getByTestId('button')
    expect(button).toHaveTextContent('UPDATE');

    const updateInput = getByTestId('input')
    const updateText = 'First Item Updated'
    fireEvent.changeText(updateInput, updateText)
    fireEvent.press(button)

    expect(firstList).toHaveTextContent('First Item Updated');
    expect(button).toHaveTextContent('ADD');
    expect(button).toBeDisabled
  });


  it("User create and forth item and update it", async () => {
    const { getByTestId, getAllByTestId, getByText } = render(<Home />)

    const text = 'Forth Item'
    const input = getByTestId('input')
    const button = getByTestId('button')

    fireEvent.changeText(input, text)
    fireEvent.press(button)

    const forthList = getAllByTestId('list')[3]
    fireEvent.press(forthList)

    expect(button).toHaveTextContent('UPDATE');

    const updateInput = getByTestId('input')
    const updateText = 'Forth Item Updated'
    fireEvent.changeText(updateInput, updateText)
    fireEvent.press(button)

    expect(forthList).toHaveTextContent('Forth Item Updated');
    expect(button).toHaveTextContent('ADD');
    expect(button).toBeDisabled
  });

});