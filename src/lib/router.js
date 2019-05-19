import isEmpty from 'lodash/isEmpty';
import { ROUTES } from '../router/routes';

export function needsQuery(query, res, path=ROUTES.HOME) {
  if (isEmpty(query) || query.search == '') {
    if (res) {
      res.writeHead(302, { location: path })
      res.end();
    } else {
      document.location.pathname = path;
    }
  }
}