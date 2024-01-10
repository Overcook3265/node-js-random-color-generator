import { argv } from 'node:process';
import chalk from 'chalk';
import randomColor from 'randomcolor';

if (argv.length < 3) {
  const rCol = randomColor();
  console.log(
    chalk.hex(rCol)(`
###############################
###############################
###############################
#####                     #####
#####       ${rCol}       #####
#####                     #####
###############################
###############################
###############################
`),
  );
} else if (argv.length > 2) {
  const userColor = randomColor({
    luminosity: argv[3],
    hue: argv[2],
  });
  console.log(
    chalk.hex(userColor)(`
###############################
###############################
###############################
#####                     #####
#####       ${userColor}       #####
#####                     #####
###############################
###############################
###############################
`),
  );
}
