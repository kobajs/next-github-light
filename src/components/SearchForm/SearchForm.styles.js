import React from 'react';
import styled from 'styled-components'

import TextInput from '../Inputs/TextInput';
import { bp } from '../../lib/styled';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0;
  width: 100%;
`;

export const SearchInput = styled(TextInput)`
  background-color: white;
  background-image: url('../../../static/baseline-search-24px.svg');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  max-width: 400px;

  ${bp('xs')} {
    width: 90%;
  }
`
