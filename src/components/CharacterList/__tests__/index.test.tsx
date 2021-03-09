import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { StarWarsCharacterList } from '../index';

describe('CharacterList', () => {

  it('displays information about characters', () => {
    const mockCharacters = [
      {
        "age": 41,
        "name": "Boba Fett",
        "isJedi": false,
      },
      {
        "birth": 200,
        "name": "Chewbacca",
        "isJedi": false,
      },
      {
        "birth": 600,
        "name": "Jabba the Hutt",
        "isJedi": false,
      }
    ];

    render(
      <StarWarsCharacterList
        characters={mockCharacters}
      />
    );

    mockCharacters.forEach(c => {
      expect(screen.getByText(`${c.name} - ${c.age} - ${c.isJedi}`)).toBeDefined();
    });
  });

});
