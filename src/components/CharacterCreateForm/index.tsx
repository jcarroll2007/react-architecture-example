import React, { useState } from 'react';
import { Input } from '../Input';
import { Form, FormField } from './styles'

interface Values {
  name: string,
  age: number,
  isJedi: boolean
}

interface CharacterCreateFormProps {
  onSubmit: (values: Values) => void
}

export const CharacterCreateForm: React.FunctionComponent<CharacterCreateFormProps> = ({
  onSubmit
}) => {
  const [errors, setErrors] = useState<{
    name: string | null
  }>({
    name: null
  })
  const [values, setValues] = useState<{
    name: string,
    age: number,
    isJedi: boolean
  }>({
    name: "",
    age: 0,
    isJedi: false
  });

  return (
    <Form onSubmit={(e) => {
      e.preventDefault()
      if (!values.name) {
        setErrors({
          name: 'Name is required.'
        })
      } else {
        onSubmit(values)
      }
    }}>
      <FormField>
        <label htmlFor="starWarsCharacters-form-name">
          Name
        </label>
        <Input
          data-testid="name-input"
          name="starWarsCharacters-form-name"
          id="starWarsCharacters-form-name"
          value={values.name}
          onChange={(e) =>
            setValues((v) => ({
              ...v,
              name: e.target.value
            }))
          }
        />
        {errors.name && <p data-testid="name-error-message">{errors.name}</p>}
      </FormField>
      <FormField>
        <label htmlFor="starWarsCharacters-form-age">
          Age
        </label>
        <Input
          name="starWarsCharacters-form-age"
          id="starWarsCharacters-form-age"
          value={values.age}
          onChange={(e) =>
            setValues((v) => ({
              ...v,
              age: Number(e.target.value)
            }))
          }
        />
      </FormField>
      <FormField>
        <label htmlFor="starWarsCharacters-form-isJedi">
          isJedi
        </label>
        <Input
          name="starWarsCharacters-form-isJedi"
          id="starWarsCharacters-form-isJedi"
          checked={values.isJedi}
          type="checkbox"
          onChange={(e) =>
            setValues((v) => ({
              ...v,
              isJedi: !values.isJedi
            }))
          }
        />
      </FormField>
      <button type="submit" data-testid="form-submit-button">Create</button>
    </Form>
  );
};
