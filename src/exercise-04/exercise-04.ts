import { clear, questionRetry, rl } from "../helpers"

const isPalindrome = (str: string): boolean => {
  const strReverse = str.split('').reverse().join('')
  return str.toLowerCase() === strReverse.toLowerCase()
}

const main = () => {
  clear()
  rl.question('What\'s the word ? ', (answer) => {
    try {
      if (isPalindrome(String(answer))) {
        console.log("This word is a palindrome.\n")
      } else {
        console.log("This word isn\'t a palindrome.\n")
      }
      questionRetry(main)
    } catch (error:any) {
      console.log('\x1b[31m%s\x1b[0m\n', error.message);
      questionRetry(main)
    }
  });
}

main()
