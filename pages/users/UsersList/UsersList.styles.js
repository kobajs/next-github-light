import styled from 'styled-components'
import { bp } from '../../../src/lib/styled';

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;

  ${bp('xs')} {
    justify-content: center;
  }
`

export const TotalCount = styled.p`
  text-align: center;
`