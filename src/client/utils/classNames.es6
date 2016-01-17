export default function classNames (data) {
  return Object.keys(data).filter(key => data[key]).join(' ');
}
