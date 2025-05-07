function formatString(input: string, toUpper?: boolean): string {
  if (toUpper === true) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
const problem1 = formatString("Hello", true);
// console.log(problem1);

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const arrayFilter = items.filter((item) => item.rating >= 4);
  return arrayFilter;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const problem2 = filterByRating(books);
// console.log(problem2);
