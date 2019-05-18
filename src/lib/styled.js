import get from 'lodash/get'

export function theme(path) {
  return props => get(props, `theme.${path}`)
}