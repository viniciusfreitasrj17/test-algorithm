import { rl, questionRetry, clear, isNotNumber } from '../helpers'

const calcInvestmentFinal = (
  investmentBase: number,
  interestRate: number,
  investmentTime: number,
  nextTime?: number,
  nextAmount?: number,
): number => {
  const investmentCurrent = nextAmount || investmentBase
  const investmentFinal = investmentCurrent + (investmentCurrent * (interestRate / 100))

  const nextMonth = nextTime ? nextTime - 1 : investmentTime - 1

  if (nextTime === 1)
    return investmentFinal

  return calcInvestmentFinal(
    investmentBase, 
    interestRate,
    investmentTime,
    nextMonth,
    investmentFinal,
  )
}

const main = () => {
  clear()
  rl.question('What\'s initial capital ? ', (answer1) => {
    rl.question('What\'s interest rate ? ', (answer2) => {
      rl.question('What\'s investment time (in months) ? ', (answer3) => {
        try {
          if ([answer1, answer2, answer3].some(answer => isNotNumber(answer)))
            throw new Error('Type a number valid')
            
          const result = calcInvestmentFinal(+answer1, +answer2, +answer3)
          
          if (isNaN(result))
            throw new Error('Internal Error')

          console.log(`The investment final is ${result.toFixed(2)}\n`);
          questionRetry(main)
        } catch (error:any) {
          console.log('\x1b[31m%s\x1b[0m\n', error.message);
          questionRetry(main)
        }
      })
    });
  });
}

main()
