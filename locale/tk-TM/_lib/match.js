"use strict";
exports.match = void 0;

var _index = require("../../_lib/buildMatchFn.js");
var _index2 = require("../../_lib/buildMatchPatternFn.js");

const matchOrdinalNumberPattern = /^(\d+)(-nji|-njy)?/i;
const parseOrdinalNumberPattern = /\d+/i;

// ý ü ä ş ň ö

const matchEraPatterns = {
  narrow: /^(beö|bes)/i,
  abbreviated: /^(beö|bes)/i,
  wide: /^(biziň eýýammyzdan öň|biziň eýýammyzdan soň)/i,
};

const parseEraPatterns = {
  any: [/(^beö|^biziň eýýammyzdan öň)/i, /(^bes|^biziň eýýammyzdan soň)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]ç/i,
  wide: /^([1234]-nji çärýek)/i,
};

const parseQuarterPatterns = {
  any: [/^1$/i, /^2$/i, /^3$/i, /^4$/i],
  abbreviated: [/^1Ç$/i, /^2Ç$/i, /^3Ç$/i, /^4Ç$/i],
  wide: [
    /^1-nji çärýek$/i,
    /^2-nji çärýek$/i,
    /^3-nji çärýek$/i,
    /^4-nji çärýek$/i,
  ],
};

const matchMonthPatterns = {
  narrow: /^[ýfmaisond]/i,
  abbreviated: /^(ýan|few|mar|apr|maý|iýn|iýl|awg|sen|okt|noý|dek)/i,
  wide: /^(ýanwar|fewral|mart|aprel|maý|iýun|iýul|awgust|sentýabr|oktýabr|noýabr|dekabr)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^ý/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^i/i,
    /^i/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ýa/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^maý/i,
    /^iý/i,
    /^iý/i,
    /^aw/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[ýdsçpaş]/i,
  short: /^(ýk|dş|sş|çr|pn|an|şn)/i,
  abbreviated: /^(ýek|duş|siş|çar|pen|ann|şen)/i,
  wide: /^(ýekşenbe|duşenbe|sişenbe|çarşenbe|penşenbe|anna|şenbe)/i,
};
const parseDayPatterns = {
  narrow: [/^ý/i, /^d/i, /^s/i, /^ç/i, /^p/i, /^a/i, /^ş/i],
  any: [/^ý/i, /^d/i, /^s/i, /^ç/i, /^p/i, /^a/i, /^ş/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(gö|gs|ýg|gü|ir|ag|gi)$/i,
  any: /^(G\.Ö\.|G\.S\.|ýary gije|günortan|irden|günortandan soň|agşam|gije)$/i,
};

const parseDayPeriodPatterns = {
  any: {
    am: /^G\.?Ö\.?/i,
    pm: /^G\.?S\.?/i,
    midnight: /^(ýg|ýary gije)$/i,
    noon: /^günortan$/i,
    morning: /^irden$/i,
    afternoon: /^günortandan soň$/i,
    evening: /^agşam$/i,
    night: /^gije$/i,
  },
};

const match = (exports.match = {
  ordinalNumber: (0, _index2.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0, _index.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0, _index.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0, _index.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0, _index.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0, _index.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
});
