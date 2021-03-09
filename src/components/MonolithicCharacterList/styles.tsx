import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Page = styled.div`
`

export const CharacterListWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  min-width: 400px;
`

export const ListWrapper = styled.div`
padding: 32px;
border-bottom: 1px solid #ececec;
`

export const ActionsWrapper = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;
`

export const LinkAction = styled(Link)`
  background-color: #eee;
  padding: 8px 16px;
  border-radius: 8px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
`
