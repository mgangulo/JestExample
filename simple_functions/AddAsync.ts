export default function AddAsync(a = 0, b = 0) {
  return new Promise<{data: number}>(resolve =>
    setTimeout(() => resolve({data: a + b}), 100),
  );
}
