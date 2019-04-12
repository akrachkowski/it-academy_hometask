function getWordOfUnit(unitNumber) {
    switch (unitNumber) {
        case 0:
            return "ноль";
        case 1:
            return "один";
        case 2:
            return "два";
        case 3:
            return "три";
        case 4:
            return "четыре";
        case 5:
            return "пять";
        case 6:
            return "шесть";
        case 7:
            return "семь";
        case 8:
            return "восемь";
        case 9:
            return "девять";
        default:
            return "Косяк 0 - 9";
    }
};

function getWordOfFirstDecimals(firstDecimalsNumber) {
    switch (firstDecimalsNumber) {
        case 0:
            return "";
        case 1:
            return "одинадцать";
        case 2:
            return "двенадцать";
        case 3:
            return "тринадцать";
        case 4:
            return "четырнадцать";
        case 5:
            return "пятнадцать";
        case 6:
            return "шестнадцать";
        case 7:
            return "семнадцать";
        case 8:
            return "восемнадцать";
        case 9:
            return "девятнадцать";
        default:
            return "Косяк 11 - 19";
    }
};

function getWordOfDecimals(decimalNumber) {
    switch (decimalNumber) {
        case 0:
            return "";
        case 1:
            return "десять";
        case 2:
            return "двадцать";
        case 3:
            return "тридцать";
        case 4:
            return "сорок";
        case 5:
            return "пятьдесят";
        case 6:
            return "шестьдесят";
        case 7:
            return "семьдесят";
        case 8:
            return "восемьдесят";
        case 9:
            return "девяносто";
        default:
            return "Косяк 10 - 90";
    }
};

function getWordOfHundred(hundredNumber) {
    switch (hundredNumber) {
        case 0:
            return "";
        case 1:
            return "сто";
        case 2:
            return "двесте";
        case 3:
            return "триста";
        case 4:
            return "четыреста";
        case 5:
            return "пятьсот";
        case 6:
            return "шестьсот";
        case 7:
            return "семьсот";
        case 8:
            return "восемьсот";
        case 9:
            return "девятьсот";
        default:
            return "Косяк 100 - 900";
    }
};

function getWordOfThousand(thousandNumber) {
    switch (thousandNumber) {
        case 0:
            return "";
        case 1:
            return "тысяча";
        case 2:
            return "две тысячи";
        case 3:
            return "три тысячи";
        case 4:
            return "четыре тысячи";
        case 5:
            return "пять тысяч";
        case 6:
            return "шесть тысяч";
        case 7:
            return "семь тысяч";
        case 8:
            return "восемь тысяч";
        case 9:
            return "девять тысяч";
        default:
            return "Косяк 1000 - 9000";
    }
};

function getFullWordOfNumber(number) {
    if (isNaN(number) || number < 0 || number > 9999) {
        return "Введите число от 0 до 9999";
    }

    let rest = 0;

    const thousandsNumber = parseInt(number / 1000);
    rest = number - thousandsNumber * 1000;
    const thousandsWord = getWordOfThousand(thousandsNumber);

    const hundredNumber = parseInt(rest / 100);
    rest = rest - hundredNumber * 100;
    const hundredWord = getWordOfHundred(hundredNumber);

    const decimalNumber = parseInt(rest / 10);
    rest = rest - decimalNumber * 10;
    if (decimalNumber === 1 && !!rest) {
        return `${thousandsWord} ${hundredWord} ${getWordOfFirstDecimals(rest)}`
    }
    const decimalWord = getWordOfDecimals(decimalNumber);

    const unitNumber = rest;
    if (!thousandsNumber && !hundredNumber && !decimalNumber && !unitNumber) {
        return `${getWordOfUnit(unitNumber)}`;
    }
    const unitWord = !!unitNumber ? getWordOfUnit(unitNumber) : "";

    return `${thousandsWord} ${hundredWord} ${decimalWord} ${unitWord}`;

}
var number = prompt(`Enter number`);
console.log(getFullWordOfNumber(number));