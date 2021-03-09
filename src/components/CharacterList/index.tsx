import React from 'react';
import { Character } from '../../api/types';
import {
  Wrapper,
  List,
  ListItem,
  ListItemInfo,
  NameWrapper,
  IsJediWrapper,
  HeaderTypography
} from './styles'

interface CharacterListProps {
  characters: Character[]
}

export const CharacterList: React.FunctionComponent<CharacterListProps> = ({
  characters,
}) => {
  return (
    <Wrapper>
      Star Wars Characters
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
          <ListItem>
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
    </Wrapper>
  );
};
