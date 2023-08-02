import { rl, questionRetry, clear, isNotNumber } from '../helpers'

const operators = ['+', '-', '*', '/']

const main = () => {
  clear()
  rl.question('What\'s first number ? ', (answer1) => {
    rl.question('What\'s second number ? ', (answer2) => {
      rl.question('What\'s operator ? ', (answer3) => {
        try {
          if ([answer1, answer2].some(answer => isNotNumber(answer)))
            throw new Error('Type a number valid')

          if (!operators.some(op => op === answer3)) 
            throw new Error('Choice an operator valid: "+, -, *, /"')
            
          const result = eval(`${+answer1} ${answer3} ${+answer2}`) as number
          
          if (isNaN(result))
            throw new Error('Internal Error')

          console.log(`The result of operation is ${result}\n`);
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
