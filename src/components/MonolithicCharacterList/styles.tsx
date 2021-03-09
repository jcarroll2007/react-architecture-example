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


export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  border: 1px solid #eee;
  margin-top: 8px;
  padding: 8px 12px;
  border-radius: 8px;
`

export const ListItemInfo = styled.span`
  flex: 1;
  white-space: nowrap;
`

export const NameWrapper = styled(ListItemInfo)`
  flex: 3;
`

export const IsJediWrapper = styled(ListItemInfo)`
  display: inline-flex;
  justify-content: flex-end;
`

export const HeaderTypography = styled.label`
  font-weight: 600;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const FormField = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
`
