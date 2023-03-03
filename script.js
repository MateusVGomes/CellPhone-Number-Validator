function telephoneCheck(str) {
  let regionCodeRegex = /^(1\s?)?/;
  let areaCodeRegex = /(\(\d{3}\)|\d{3})/;
  let spacingRegex = /[\s-]?/;
  let threeNumbersRegex = /\d{3}/;
  let foursNumbersRegex = /\d{4}$/;
  let fullRegex = new RegExp(regionCodeRegex.source + areaCodeRegex.source + spacingRegex.source + threeNumbersRegex.source + spacingRegex.source + foursNumbersRegex.source);

  return fullRegex.test(str);
}
