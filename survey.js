const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What is your favorite passtime? ', (activity) => {
    rl.question('What is your favorite music genre? ', (music) => {
      rl.question('What is your favorite meal of the day? ie. (breakfast, lunch or dinner) ', (meal) => {
        rl.question('What is your favorite thing to eat for that meal? ', (food) => {
          rl.question('If you could have one superpower, which would it be? ', (superpower) => {
            console.log(`My name is ${name}, I love ${activity} and listning to ${music} music. I love eating ${food} for ${meal}. I, one day, have the ability of ${superpower}.`);
            rl.close();
          });
        });
      });
    });
  });
});