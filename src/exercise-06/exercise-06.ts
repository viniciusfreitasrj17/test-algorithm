import { clear, questionRetry, rl } from "../helpers"

const countVowels = (str: string): number => {
  const vowels = 'aeiouAEIOU'
  let count = 0

  for (const letter of str.split('')) {
    if (vowels.includes(letter))
      count++
  }

  return count
}

const main = () => {
  clear()
  rl.question('What\'s the sentence ? ', (answer) => {
    try {
      const count = countVowels(String(answer))
      
      console.log(`The vowel number of sentence "${answer}" is ${count}\n`)
      questionRetry(main)
    } catch (error:any) {
      console.log('\x1b[31m%s\x1b[0m\n', error.message);
      questionRetry(main)
    }
  });
}

main()
