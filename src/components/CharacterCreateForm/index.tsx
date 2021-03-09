import React, { useState } from 'react';

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
    <form onSubmit={() => onSubmit(values)}>
      <input
        value={values.name}
        onChange={(e) =>
          setValues((v) => ({
            ...v,
            name: e.target.value
          }))
        }
      />
      <input
        value={values.age}
        onChange={(e) =>
          setValues((v) => ({
            ...v,
            age: Number(e.target.value)
          }))
        }
      />
      <input
        checked={values.isJedi}
        type="checkbox"
        onChange={(e) =>
          setValues((v) => ({
            ...v,
            isJedi: !values.isJedi
          }))
        }
      />
      <button type="submit">Create</button>
    </form>
  );
};
