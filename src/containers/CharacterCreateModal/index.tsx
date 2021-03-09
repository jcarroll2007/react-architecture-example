import React from 'react';
// import { useDispatch } from 'react-redux';
import { CharacterCreateForm } from '../../components/CharacterCreateForm';
import { Modal } from '../../components/Modal';

interface CharacterCreateModalProps {
  onCreateSuccess: () => void
}

export const CharacterCreateModalContainer: React.FunctionComponent<CharacterCreateModalProps> = ({
  onCreateSuccess
}) => {
  // const dispatch = useDispatch()

  return (
    <Modal isOpen={true}>
      <CharacterCreateForm
        onSubmit={function handleSubmit(values) {
          // TODO: implement create character action
          // await dispatch(actions.createCharacter(values));
          onCreateSuccess()
        }} />
    </Modal>
  );
};
