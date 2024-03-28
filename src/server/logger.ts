import chalk from 'chalk';

export const info = (text: string) => {
  console.log(chalk`{cyan [next-custom-server]} ${text}`);
};

export const error = (message: string) => {
  console.log(chalk`{cyan [next-custom-server]} {red ${message}}`);
};
