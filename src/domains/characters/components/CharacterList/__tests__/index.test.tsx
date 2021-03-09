import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterList } from '../index';
import { Character } from '../../../../../api/types';

describe('CharacterList', () => {

  it('displays information about characters', () => {
    const mockCharacters: Character[] = [
      {
        "age": 41,
        "name": "Boba Fett",
        "isJedi": false,
      },
      {
        "age": 200,
        "name": "Chewbacca",
        "isJedi": false,
      },
      {
        "age": 600,
        "name": "Jabba the Hutt",
        "isJedi": false,
      }
    ];

    render(
      <CharacterList
        characters={mockCharacters}
      />
    );

    mockCharacters.forEach(c => {
      expect(screen.getByText(`${c.name} - ${c.age} - ${c.isJedi}`)).toBeDefined();
    });
  });

});
