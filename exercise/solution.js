// BEGIN (write your solution here)
const arrayFetch = (arr, id, def) => {
  let index = id;
  if (index < 0) {
    arr.reverse();
    index = Math.abs(index);
  }

  return (arr[index] !== undefined) ? arr[index] : def;
};
// END
export default arrayFetch;
