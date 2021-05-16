import checkIsEmpty from "lodash/isEmpty";
import chunk from "lodash/chunk";
const empty = {};
const notEmpty = {
  a: 1
};
checkIsEmpty(obj);
checkIsEmpty(notEmpty);
chunk(["a", "b", "c", "d"], 2);
