import { isEmpty, chunk, last } from 'lodash';

const empty = {};
const notEmpty = {
  a: 1,
};

isEmpty(obj);
isEmpty(notEmpty);

chunk(['a', 'b', 'c', 'd'], 2);

last(['a', 'b']);
