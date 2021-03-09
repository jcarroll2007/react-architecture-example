import React, { Children } from 'react'
import { PageWrapper } from './styles'

export const Page: React.FunctionComponent = ({
  children
}) => {
  return <PageWrapper>{children}</PageWrapper>
}
