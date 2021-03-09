import React from 'react';
import { useDispatch } from 'react-redux';
// import { actions } from './selectors';
// import Modal from './Modal';
// import { CharacterCreateModalForm } from '../../components/CharacterCreateModalForm'

interface CharacterCreateModalProps {
  onCreateSuccess: () => void
}

export const CharacterCreateModalContainer: React.FunctionComponent<CharacterCreateModalProps> = ({
  onCreateSuccess
}) => {
  const dispatch = useDispatch()
  // async function handleSubmit(values) {
  //   await dispatch(actions.createCharacter(values));
  //   onCreateSuccess()
  // }

  return (
    <div>modal</div>
    // <Modal title="Create New Character">
    //   <CharacterCreateModalForm onSubmit={handleSubmit} />
    // </Modal>
  );
};
