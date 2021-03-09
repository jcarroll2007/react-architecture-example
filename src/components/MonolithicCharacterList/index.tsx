import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Page } from '../Page'
import { actions } from '../../redux/actions';
import { CHARACTERS, CHARACTERS_CREATE } from '../../routes'
import { characterListSelector, characterListLoadingSelector } from '../../redux/selectors';
import { Route, useHistory } from 'react-router-dom';
import { Modal } from '../Modal';
import { Input } from '../Input';
import {
  CharacterListWrapper,
  ListWrapper,
  ActionsWrapper,
  LinkAction,
  List,
  ListItem,
  NameWrapper,
  HeaderTypography,
  ListItemInfo,
  IsJediWrapper,
  Form,
  FormField
} from './styles';

interface Values {
  name: string,
  age: number,
  isJedi: boolean
}

export const MonolithicCharacterList: React.FunctionComponent = () => {
  const [values, setValues] = useState<{
    name: string,
    age: number,
    isJedi: boolean
  }>({
    name: "",
    age: 0,
    isJedi: false
  });
  const characters = useSelector(characterListSelector);
  const loading = useSelector(characterListLoadingSelector);
  const history = useHistory()
  const dispatch = useDispatch();

  function handleSubmit(values: Values) {
    dispatch(actions.createCharacter(values))
    history.push(CHARACTERS)
  }

  if (!characters) dispatch(actions.fetchCharacters());
  if (loading) return <div>loading</div>;

  return (
    <Page>
      <CharacterListWrapper>
        <ListWrapper>
          Star Wars Characters
          {characters ?
            (
              <List>
                <ListItem>
                  <NameWrapper>
                    <HeaderTypography>
                      Name
                    </HeaderTypography>
                  </NameWrapper>
                  <ListItemInfo>
                    <HeaderTypography>
                      Age
                    </HeaderTypography>
                  </ListItemInfo>
                  <IsJediWrapper>
                    <HeaderTypography>
                      isJedi
                    </HeaderTypography>
                  </IsJediWrapper>
                </ListItem>
                {characters.map((c) => (
                  <ListItem key={c.name}>
                    <NameWrapper>
                      {c.name}
                    </NameWrapper>
                    <ListItemInfo>
                      {c.age}
                    </ListItemInfo>
                    <IsJediWrapper>
                      {c.isJedi ? 'True' : 'False'}
                    </IsJediWrapper>
                  </ListItem>
                ))}
              </List>
            ) :
            null
          }
        </ListWrapper>
        <ActionsWrapper>
          <LinkAction to={CHARACTERS_CREATE}>Create a New Character</LinkAction>
        </ActionsWrapper>
      </CharacterListWrapper>
      <Route
        exact
        path={CHARACTERS_CREATE}
        render={() => (
          <Modal isOpen={true}><Form onSubmit={() => handleSubmit(values)}>
            <FormField>
              <label htmlFor="starWarsCharacters-form-name">
                Name
              </label>
              <Input
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
            <button type="submit">Create</button>
          </Form>
          </Modal>
        )}
      />
    </Page>
  )
}
