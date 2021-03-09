import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
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
