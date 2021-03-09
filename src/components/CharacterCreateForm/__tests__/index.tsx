import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { CharacterCreateForm } from '..'

describe('CharacterCreateForm', () => {
  it('should not submit for and show error message if name is null', async () => {
    const onSubmitMock = jest.fn()
    const { getByLabelText, getByTestId, queryByTestId } = render(
      <CharacterCreateForm onSubmit={onSubmitMock} />
    )
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
