import { clear, isNotNumber, questionRetry, rl } from "../helpers"

const calcFactorialNumber = (n: number, next?: number): number => {
  if (n === 0 && !next)
    return 1

  if (n === 1 && !next)
    return 1

  if (next === 1)
    return n

  const nextNumber = next ? next - 1 : n - 1

  return calcFactorialNumber(n * nextNumber, nextNumber)
}

const main = () => {
  clear()
  rl.question('What\'s the number ? ', (answer) => {
    try {
      if (isNotNumber(answer))
        throw new Error('Type a number valid')
        
      const result = calcFactorialNumber(+answer)

      console.log(`The factorial of number ${answer} is ${result}\n`);
      questionRetry(main)
    } catch (error:any) {
      console.log('\x1b[31m%s\x1b[0m\n', error.message);
      questionRetry(main)
    }
  });
}

main()
