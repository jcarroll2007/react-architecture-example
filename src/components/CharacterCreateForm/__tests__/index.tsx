import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { CharacterCreateForm } from '..'

describe('CharacterCreateForm', () => {
  it('should not submit form and show error message if name is null', async () => {
    const onSubmitMock = jest.fn()
    const { getByTestId, queryByTestId } = render(
      <CharacterCreateForm onSubmit={onSubmitMock} />
    )
    const submitButton = getByTestId('form-submit-button')
    expect(queryByTestId('name-error-message')).not.toBeInTheDocument()

    userEvent.click(submitButton)
    expect(onSubmitMock).not.toHaveBeenCalled()

    expect(getByTestId('name-error-message')).toBeInTheDocument()
  })
})
