function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
const problem1 = formatString("Hello", true);
// console.log(problem1);
