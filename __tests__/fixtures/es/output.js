import isEmpty from "lodash-es/isEmpty";
import chunk from "lodash-es/chunk";
const empty = {};
const notEmpty = {
  a: 1
};
checkIsEmpty(obj);
checkIsEmpty(notEmpty);
chunk(["a", "b", "c", "d"], 2);
