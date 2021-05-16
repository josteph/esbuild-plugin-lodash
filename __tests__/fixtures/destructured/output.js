import isEmpty from "lodash/isEmpty";
import chunk from "lodash/chunk";
const empty = {};
const notEmpty = {
  a: 1
};
isEmpty(obj);
isEmpty(notEmpty);
chunk(["a", "b", "c", "d"], 2);
