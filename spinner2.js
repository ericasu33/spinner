const bars = ["|   ", "/   ", "-   ", "\\   ", "|   ", "/   ", "-   ", "|   ", "\n"];

let time = 100;
let delay = 200;

for (const symbol of bars) {
  setTimeout(() => {
    process.stdout.write(`\r${symbol}`);
  }, time);
  time += delay;
}