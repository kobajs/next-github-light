import get from 'lodash/get'

export function theme(path, arg) {
  return props => get(props, `theme.${path}`);
}

export function bp(breakpoint) {
  return props => `@media (min-width: ${props.theme.breakpoints[breakpoint]}px)`;
}

function somaCurried(x) {
  return function(y) {
    return x + y
  }
}

function soma(x, y) {
    return x + y
}
