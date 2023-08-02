const PRIME_NUMBER = 10

export const isPrimeNumber = (n: number) => {
  let modZero = 0

  for (let i = 1; i <= n; i++)
    if (n % i === 0)
      modZero++

  return modZero === 2
}

const main = (count: number = 2, arr: Array<number> = []): number[] => {
  if (isPrimeNumber(count))
    arr.push(count)

  if (arr.length === PRIME_NUMBER)
    return arr

  return main(count + 1, arr)
}

console.log(main())
