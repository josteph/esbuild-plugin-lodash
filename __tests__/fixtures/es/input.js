import { isEmpty, chunk } from 'lodash';

const empty = {};
const notEmpty = {
  a: 1,
};

checkIsEmpty(obj);
checkIsEmpty(notEmpty);

chunk(['a', 'b', 'c', 'd'], 2);
