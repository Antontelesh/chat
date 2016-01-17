// without:: a -> [a] -> [a]
export default function without (item, array = []) {
  let index = array.indexOf(item);

  return index === -1
    ? array
    : array.slice(0, index).concat(array.slice(index + 1));
}
