export default function Divide(a = 0, b = 1) {
  if (!b) {
    // Matches +0, -0, NaN
    throw Error('Invalid dividend ' + b);
  }
  return a / b;
}
