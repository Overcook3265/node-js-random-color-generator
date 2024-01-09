import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

let userColor = randomColor({
  luminosity: argv[2],
  hue: argv[3],
});
console.log(userColor);
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

//console.log(argv[2], argv[3]);

// let rCol = randomColor();
// console.log(
//   chalk.hex(rCol)(`
// ###############################
// ###############################
// ###############################
// #####       ${rCol}       #####
// ###############################
// ###############################
// ###############################
// `),
// );

//Overly complicated first attempt:
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
