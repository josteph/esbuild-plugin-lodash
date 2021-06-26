import isEmpty from "lodash/isEmpty";
import chunk from "lodash/chunk";
import last from "lodash/last";
const empty = {};
const notEmpty = {
  a: 1
};
isEmpty(obj);
isEmpty(notEmpty);
chunk(["a", "b", "c", "d"], 2);
last(["a", "b"]);
