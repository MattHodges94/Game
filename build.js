import webpack from 'webpack';
import config from './webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Build started...'))

webpack(config).run((err, stats) => {
  if(err){
    console.log(chalk.red(err))
    return 1;
  }

  console.log(chalk.green('Build successful.'))
  return 0;
})