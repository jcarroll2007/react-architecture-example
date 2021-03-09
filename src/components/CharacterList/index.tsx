import React from 'react';
import { Character } from '../../api/types';
import { Wrapper, List, ListItem } from './styles'

interface CharacterListProps {
  characters: Character[]
}

export const CharacterList: React.FunctionComponent<CharacterListProps> = ({
  characters,
}) => {
  return (
    <Wrapper>
      <List>
        {characters.map((c) => (
          <ListItem>
            {c.name} - {c.age} - {c.isJedi}
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};
