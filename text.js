// // function multipleFive(number) {
// //   return number % 5 == 0;
// // }
// // console.log(multipleFive(10));
// // console.log(multipleFive(2));
// // // დავალება 2
// // function calculateDiscountedPrice(originalPrice, discountPercentage) {
// //   let discountAmount = (originalPrice * discountPercentage) / 100;
// //   let finalPrice = originalPrice - discountAmount;

// //   return finalPrice;
// // }

// // console.log(calculateDiscountedPrice(1000, 10));

// // // დავალება 3

// // function getCurrencySymbolFromCode(currencyCode) {
// //   const currencySymbols = {
// //     USD: "$",
// //     EUR: "€",
// //     GEL: "ლ",
// //   };

// //   if (currencySymbols[currencyCode]) {
// //     return currencySymbols[currencyCode];
// //   } else {
// //     return "არ არსებობს ამ ვალუტის სიმბოლო";
// //   }
// // }

// // console.log(getCurrencySymbolFromCode("USD"));
// // console.log(getCurrencySymbolFromCode("EUR"));
// // console.log(getCurrencySymbolFromCode("RUB"));

// // // დავალება 5
// // function changeText(text) {
// //   return text.toLowerCase();
// // }
// // console.log(changeText("ME NAME IS JONE"));
// // // დავალება 6
// // function filterNumbers(numbers) {
// //   return numbers.filter((number) => number % 2 !== 0);
// // }
// // console.log(filterNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]));

// // // დავალება 7

// // function findObject(objects, title) {
// //   return objects.find((obj) => obj.title === title);
// // }

// // const objects = [
// //   { title: "Html", style: "black" },
// //   { title: "CSS" },
// //   { title: "JS" },
// // ];

// // console.log(findObject(objects, "Html"));
// // console.log(findObject(objects, "CSS"))

// const paragraph = document.querySelector("p");
// const firstSection = document.querySelector("section");
// const taitlleH1 = document.querySelector("h1");
// const section = document.querySelector(".second");
// const images = firstSection.querySelectorAll("img");
// const buttom = firstSection.querySelector("button");
// const buttom2 = section.querySelector("button");

// const newParagraph = document.createElement("h1");
// console.log(newParagraph);

// newParagraph.textContent = "l am a new ";

// // text edit

// // section.appendChild(newParagraph); // es amatebs htmlshi appendchildren

// // section.insertAdjacentElement("afterbegin", newParagraph);
// // section.insertAdjacentElement("afterend", newParagraph);
// section.insertAdjacentElement("beforebegin", newParagraph);
// // section.insertAdjacentElement("beforeend", newParagraph);

// firstSection.classList.add("bg-blue");

// // iventebi
// function handleClick(event) {
//   event.stopPropagation();
//   firstSection.classList.toggle("bg-blue");
// }

// buttom.addEventListener("click", handleClick);

// buttom2.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// firstSection.addEventListener("click", (e) => {
//   firstSection.append(newParagraph);
// });
