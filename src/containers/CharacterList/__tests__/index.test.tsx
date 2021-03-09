import React from 'react';
import mock from 'xhr-mock';
import { renderConnectedComponent } from '@fullstory/ui-testing-utils';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CharacterListContainer } from '../index';
import { mockedCharacters } from '../fixtures';

describe('CharacterListContainer', () => {
  beforeEach(() => mock.setup());

  afterEach(() => mock.teardown());

  it('fetches information about characters on render', async () => {
    const mockGetCharacters = jest.fn((_, res) => {
      return res.status(200).body(mockedCharacters);
    });

    mock.get('/characters', mockGetCharacters);

    renderConnectedComponent(<CharacterListContainer createCharacterPath="/characters/new" />);

    await waitFor(() => expect(mockGetCharacters).toHaveBeenCalledTimes(1));
  });
});
