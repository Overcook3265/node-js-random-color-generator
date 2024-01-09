import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

console.log(argv.length);
if (argv.length < 3) {
  let rCol = randomColor();
  console.log(
    chalk.hex(rCol)(`
###############################
###############################
###############################
#####       ${rCol}       #####
###############################
###############################
###############################
`),
  );
} else if (argv.length > 2) {
  let userColor = randomColor({
    luminosity: argv[3],
    hue: argv[2],
  });
  console.log(
    chalk.hex(userColor)(`
###############################
###############################
###############################
#####       ${userColor}       #####
###############################
###############################
###############################
`),
  );
}

//Overly complicated first attempt -_- :
// let rColHex = chalk.hex(rCol)(rCol);
// let blockTop = chalk.hex(rCol)(
//   '###############################\n###############################\n###############################\n#####      ',
// );
// let blockBottom = chalk.hex(rCol)(
//   '      #####\n###############################\n###############################\n###############################',
// );

// console.log(blockTop, rColHex, blockBottom);

// const cat = 'cat';
// console.log
//   '###############################\n###############################\n###############################\n My %s has %d ears',
//   cat,
//   2,
// );
