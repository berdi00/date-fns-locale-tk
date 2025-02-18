import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.mjs";

const eraValues = {
  narrow: ["BEÖ", "BES"],
  abbreviated: ["BEÖ", "BES"],
  wide: ["Biziň eýýammyzdan öñ", "Biziň eýýammyzdan soñ"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1Ç", "2Ç", "3Ç", "4Ç"],
  wide: ["1-nji çärýek", "2-nji çärýek", "3-nji çärýek", "4-nji çärýek"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["Ý", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Ýan",
    "Few",
    "Mar",
    "Apr",
    "Maý",
    "Iýn",
    "Iýl",
    "Awg",
    "Sen",
    "Okt",
    "Noý",
    "Dek",
  ],

  wide: [
    "Ýanwar",
    "Fewral",
    "Mart",
    "Aprel",
    "Maý",
    "Iýun",
    "Iýul",
    "Awgust",
    "Sentýabr",
    "Oktýabr",
    "Noýabr",
    "Dekabr",
  ],
};

const dayValues = {
  narrow: ["Ý", "D", "S", "Ç", "P", "A", "Ş"],
  short: ["Ýk", "Dş", "Sş", "Çr", "Pn", "An", "Şn"],
  abbreviated: ["Ýek", "Duş", "Siş", "Çar", "Pen", "Ann", "Şen"],
  wide: [
    "Ýekşenbe",
    "Duşenbe",
    "Sişenbe",
    "Çarşenbe",
    "Penşenbe",
    "Anna",
    "Şenbe",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "gö",
    pm: "gs",
    midnight: "ýg",
    noon: "gü",
    morning: "ir",
    afternoon: "gs",
    evening: "ag",
    night: "gi",
  },
  abbreviated: {
    am: "GÖ",
    pm: "GS",
    midnight: "ýary gije",
    noon: "günortan",
    morning: "irden",
    afternoon: "günortandan soň",
    evening: "agşam",
    night: "gije",
  },
  wide: {
    am: "G.Ö.",
    pm: "G.S.",
    midnight: "ýary gije",
    noon: "günortan",
    morning: "irden",
    afternoon: "günortandan soň",
    evening: "agşam",
    night: "gije",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "gö",
    pm: "gs",
    midnight: "ýg",
    noon: "gü",
    morning: "ir",
    afternoon: "gs",
    evening: "ag",
    night: "gi",
  },
  abbreviated: {
    am: "GÖ",
    pm: "GS",
    midnight: "ýary gije",
    noon: "günortan",
    morning: "irden",
    afternoon: "günortandan soň",
    evening: "agşam",
    night: "gije",
  },
  wide: {
    am: "G.Ö.",
    pm: "G.S.",
    midnight: "ýary gije",
    noon: "günortan",
    morning: "irden",
    afternoon: "günortandan soň",
    evening: "agşam",
    night: "gije",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 === 10) {
    return number + "-njy";
  }
  switch (rem100 % 10) {
    case 6:
      return number + "-njy";
    case 9:
      return number + "-njy";
  }
  return number + "-nji";
};

export const localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => Number(quarter) - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
