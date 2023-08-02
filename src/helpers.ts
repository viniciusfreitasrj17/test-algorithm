import readline from 'readline'

export const clear = () => {
  var stdout = "";

  if (process.platform.indexOf("win") != 0) {
      stdout += "\x1b[2J";
  } else {
      var lines = process.stdout.getWindowSize()[1];

      for (var i=0; i<lines; i++) {
          stdout += "\r\n";
      }
  }

  stdout += "\x1b[0f";

  process.stdout.write(stdout);
}

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export const questionRetry = (callback: () => void) => {
  rl.question('Do you want retry again (y/N) ? ', (answer) => {
    if (answer === 'y')
      callback()
    else {
      rl.close();
    }
  })
}

export const isNotNumber = (n: any) => typeof n !== 'number' && isNaN(+n)
