import React from 'react';
import mock from 'xhr-mock';
import { renderConnectedComponent } from '@fullstory/ui-testing-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CharacterCreateModalContainer } from '../index';
import { mockedCharacters } from '../fixtures';

describe('CharacterCreateModalContainer', () => {
  beforeEach(() => mock.setup());

  afterEach(() => mock.teardown());

  it('makes post request to add a character', async () => {
    const mockAddCharacter = jest.fn((req, res) => {
      expect(JSON.parse(req._body)).toEqual({
        name: 'Obi Wan Kenobi',
        age: 55,
        isJedi: true,
      });

      return res.status(200);
    });
    mock.post('/characters/new', mockAddCharacter);

    renderConnectedComponent(<CharacterCreateModalContainer onCreateSuccess={() => {}} />);

    const nameField = screen.getByTestId('name-input');
    userEvent.type(nameField, 'Obi Wan Kenobi');
    const ageField = screen.getByTestId('age-input');
    userEvent.type(ageField, '55');
    const jediCheckbox = screen.getByTestId('jedi-input');
    userEvent.click(jediCheckbox);
    expect(jediCheckbox).toBeChecked();

    // click Create button
    userEvent.click(screen.getByRole('button', { name: /create/i }));

    await waitFor(() => expect(mockAddCharacter).toHaveBeenCalledTimes(1));
  });
});

