export default function invariant (condition, ...msg) {
  if (!condition) {
    throw new Error(...msg);
  }
}
