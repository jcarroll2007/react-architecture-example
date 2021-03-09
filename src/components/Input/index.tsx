import React, { InputHTMLAttributes } from 'react'
import { StyledInput } from './styles'

export const Input: React.FunctionComponent<InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <StyledInput {...props} />
)
