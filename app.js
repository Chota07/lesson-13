
const myComputerManufacturer = `apple macbook`;
console.log(typeof myComputerManufacturer, myComputerManufacturer)

const myComputerMemory = `8GB`;
console.log(typeof myComputerMemory, myComputerMemory)

const myComputerOS = `macOS`;
console.log(typeof myComputerOS, myComputerOS)

const computerBuyingYear = 2022;
console.log(typeof computerBuyingYear, computerBuyingYear)

const currentYear = 2023;
console.log(typeof currentYear, currentYear)

let text1 = `my computer is `;
console.log(typeof text1, text1)

let text2 = ` it runs `;
console.log(typeof text2, text2)

let text3 = ` and I've been using it for `;
console.log(typeof text3, text3)

let text4 = ` year`;
console.log(typeof text4, text4)

const usingYears = currentYear-computerBuyingYear;
console.log(typeof usingYears, usingYears)


let mainText = text1+myComputerManufacturer+text2+myComputerOS+text3+usingYears+text4;
console.log(typeof mainText, mainText)

const secondText = `${text1}${myComputerManufacturer}${text2}${myComputerOS}${text3}${currentYear-computerBuyingYear}${text4}`;
console.log(typeof secondText, secondText)
