import React from "react";
import styled from 'styled-components'

import { theme } from "../../lib/styled";

const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 ${theme('spacing.unit')}px;
`

const Radio = styled.input.attrs({
  type: 'radio'
})`
  margin-right: ${theme('spacing.unit')}px;
`

function RadioButton({ name, value, children }) {
  return (
    <RadioWrapper>
      <Radio name={name} value={value} />
      {children}
    </RadioWrapper>
  );
}

export default RadioButton