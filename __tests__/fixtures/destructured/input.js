import { isEmpty, chunk } from 'lodash';

const empty = {};
const notEmpty = {
  a: 1,
};

isEmpty(obj);
isEmpty(notEmpty);

chunk(['a', 'b', 'c', 'd'], 2);
