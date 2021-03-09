import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, ListWrapper, ActionsWrapper, LinkAction } from './styles'

interface ButtonActionType {
  onClick: () => void,
  label: string
}

interface LinkActionType {
  to: string,
  label: string
}

interface ActionListProps {
  actions: Array<ButtonActionType | LinkActionType>
}

export const ActionList: React.FunctionComponent<ActionListProps> = ({
  children,
  actions
}) => (
  <Wrapper>
    <ListWrapper>
      {children}
    </ListWrapper>
    <ActionsWrapper>
      {actions.map(action => {

        // TODO: this could be cleaned up by using a typeguard function
        const maybeLink = action as LinkActionType
        if (maybeLink.to) return <LinkAction key={maybeLink.label} to={maybeLink.to}>{maybeLink.label}</LinkAction>

        const maybeButton = action as ButtonActionType
        if (maybeButton.onClick) {
          return <button key={maybeButton.label} onClick={maybeButton.onClick}>{maybeButton.label}</button>
        }

        else throw new Error('ActionList component got an action of an unrecognized type.')
      })}
    </ActionsWrapper>
  </Wrapper>
)
