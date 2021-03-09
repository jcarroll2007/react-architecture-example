import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, ListWrapper, ActionsWrapper } from './styles'

interface ButtonAction {
  onClick: () => void,
  label: string
}

interface LinkAction {
  to: string,
  label: string
}

interface ActionListProps {
  actions: Array<ButtonAction | LinkAction>
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
        const maybeLink = action as LinkAction
        if (maybeLink.to) return <Link key={maybeLink.label} to={maybeLink.to}>{maybeLink.label}</Link>

        const maybeButton = action as ButtonAction
        if (maybeButton.onClick) {
          return <button key={maybeButton.label} onClick={maybeButton.onClick}>{maybeButton.label}</button>
        }

        else throw new Error('ActionList component got an action of an unrecognized type.')
      })}
    </ActionsWrapper>
  </Wrapper>
)
