import { studyData } from "../Data.js ";

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property].slice(0, 7);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

let result = groupBy(studyData, "date");

console.log(result);
