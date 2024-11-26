function multipleFive(number) {
  return number % 5 == 0;
}
console.log(multipleFive(10));
console.log(multipleFive(2));
// დავალება 2
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discountAmount = (originalPrice * discountPercentage) / 100;
  let finalPrice = originalPrice - discountAmount;

  return finalPrice;
}

console.log(calculateDiscountedPrice(1000, 10));

// დავალება 3

function getCurrencySymbolFromCode(currencyCode) {
  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GEL: "ლ",
  };

  if (currencySymbols[currencyCode]) {
    return currencySymbols[currencyCode];
  } else {
    return "არ არსებობს ამ ვალუტის სიმბოლო";
  }
}

console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("RUB"));

// დავალება 5
function changeText(text) {
  return text.toLowerCase();
}
console.log(changeText("ME NAME IS JONE"));
// დავალება 6
function filterNumbers(numbers) {
  return numbers.filter((number) => number % 2 !== 0);
}
console.log(filterNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

// დავალება 7

function findObject(objects, title) {
  return objects.find((obj) => obj.title === title);
}

const objects = [
  { title: "Html", style: "black" },
  { title: "CSS" },
  { title: "JS" },
];

console.log(findObject(objects, "Html"));
console.log(findObject(objects, "CSS"));
