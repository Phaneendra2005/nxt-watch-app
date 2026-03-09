import styled from 'styled-components'

export const ActionButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-right: 12px;
  font-size: 14px;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`
