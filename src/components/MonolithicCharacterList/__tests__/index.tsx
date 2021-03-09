import { createStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { MonolithicCharacterList } from '..'
import { reducer } from '../../../redux/reducer';

const store = createStore(
  reducer
)

describe('MonolithicCharacterList', () => {
  it('should not submit for and show error message if name is null', async () => {
    const onSubmitMock = jest.fn()
    const { getByTestId, queryByTestId } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MonolithicCharacterList />
        </MemoryRouter>
      </Provider>
    )

    const createCharacterButton = getByTestId('create-new-character-button')
    userEvent.click(createCharacterButton)

    const submitButton = getByTestId('form-submit-button')
    expect(queryByTestId('name-error-message')).not.toBeInTheDocument()

    userEvent.click(submitButton)
    expect(onSubmitMock).not.toHaveBeenCalled()

    // const nameInput = getByLabelText('Name')
    expect(getByTestId('name-error-message')).toBeInTheDocument()

    // TODO: figure out why this typing isn't working
    // await userEvent.type(nameInput, 'a')
    // expect(nameInput).toHaveAttribute('value', 'a')

    // await userEvent.click(submitButton)
    // expect(onSubmitMock).toHaveBeenCalled()
  })
})
