process.stdout.write('hello from spinner1.js... \rheyyy\n');

let array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    process.stdout.write(array[i]);
  }, 1000);
}