import styled from 'styled-components'

import { theme } from '../../lib/styled';
import TextInput from '../Inputs/TextInput';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${theme('spacing.appBar')}px;
  background-color: ${theme('palette.primary.main')};
  color: ${theme('palette.white')};
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInput = styled(TextInput)`
  background-color: white;
  background-image: url('../../../static/baseline-search-24px.svg');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  width: 300px;
`