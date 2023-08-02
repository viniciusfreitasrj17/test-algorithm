import { clear, isNotNumber, questionRetry, rl } from "../helpers"

const showTableMultiplication = (n: number): void => {
  function formatNumber(n: number) {
    return n < 10 ? `0${n}` : String(n)
  }

  for (let i = 1; i <= 10; i++) {
    const result = i * n
    console.log(
      `| ${formatNumber(i)} | x | ${formatNumber(n)} | = | ${formatNumber(result)}`
    )
  }
}

const main = () => {
  clear()
  rl.question('What\'s the number ? ', (answer) => {
    try {
      if (isNotNumber(answer))
        throw new Error('Type a number valid')

      showTableMultiplication(+answer)
      questionRetry(main)
    } catch (error:any) {
      console.log('\x1b[31m%s\x1b[0m\n', error.message);
      questionRetry(main)
    }
  });
}

main()
