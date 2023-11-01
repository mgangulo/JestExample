import Divide from './Divide';

export default function DivideAsync(a = 0, b = 1) {
  return new Promise<{data: number}>((resolve, reject) =>
    setTimeout(() => {
      try {
        const data = Divide(a, b);
        resolve({data: data});
      } catch (e) {
        reject(e as Error);
      }
    }, 100),
  );
}
