import { rl, questionRetry, clear, isNotNumber } from '../helpers'

const main = () => {
  clear()
  rl.question('What\'s first grades ? ', (answer1) => {
    rl.question('What\'s second grades ? ', (answer2) => {
      rl.question('What\'s third grades ? ', (answer3) => {
        try {
          if ([answer1, answer2, answer3].some(answer => isNotNumber(answer)))
            throw new Error('Type a number valid')
            
          const result = (+answer1 + +answer2 + +answer3) / 3
          
          if (isNaN(result))
            throw new Error('Internal Error')

          console.log(`The average of the grades is ${result.toFixed(2)}\n`);
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
