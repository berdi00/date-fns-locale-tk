function _typeof(o) {"@babel/helpers - typeof";return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {return typeof o;} : function (o) {return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;}, _typeof(o);}function ownKeys(e, r) {var t = Object.keys(e);if (Object.getOwnPropertySymbols) {var o = Object.getOwnPropertySymbols(e);r && (o = o.filter(function (r) {return Object.getOwnPropertyDescriptor(e, r).enumerable;})), t.push.apply(t, o);}return t;}function _objectSpread(e) {for (var r = 1; r < arguments.length; r++) {var t = null != arguments[r] ? arguments[r] : {};r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {_defineProperty(e, r, t[r]);}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));});}return e;}function _defineProperty(obj, key, value) {key = _toPropertyKey(key);if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toPropertyKey(t) {var i = _toPrimitive(t, "string");return "symbol" == _typeof(i) ? i : String(i);}function _toPrimitive(t, r) {if ("object" != _typeof(t) || !t) return t;var e = t[Symbol.toPrimitive];if (void 0 !== e) {var i = e.call(t, r || "default");if ("object" != _typeof(i)) return i;throw new TypeError("@@toPrimitive must return a primitive value.");}return ("string" === r ? String : Number)(t);}(function (_window$dateFns) {var __defProp = Object.defineProperty;
  var __export = function __export(target, all) {
    for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: function set(newValue) {return all[name] = function () {return newValue;};}
    });
  };

  // lib/locale/tk-TM/_lib/formatDistance.mjs
  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: "bir sekuntdan az",
      other: "{{count}} sekuntdan az"
    },
    xSeconds: {
      one: "1 sekunt",
      other: "{{count}} sekunt"
    },
    halfAMinute: "\xFDarym minut",
    lessThanXMinutes: {
      one: "bir minutdan az",
      other: "{{count}} minutdan az"
    },
    xMinutes: {
      one: "1 minut",
      other: "{{count}} minut"
    },
    aboutXHours: {
      one: "takmynan 1 sagat",
      other: "takmynan {{count}} sagat"
    },
    xHours: {
      one: "1 sagat",
      other: "{{count}} sagat"
    },
    xDays: {
      one: "1 g\xFCn",
      other: "{{count}} g\xFCn"
    },
    aboutXWeeks: {
      one: "takmynan 1 hepde",
      other: "takmynan {{count}} hepde"
    },
    xWeeks: {
      one: "1 hepde",
      other: "{{count}} hepde"
    },
    aboutXMonths: {
      one: "takmynan 1 a\xFD",
      other: "takmynan {{count}} a\xFD"
    },
    xMonths: {
      one: "1 a\xFD",
      other: "{{count}} a\xFD"
    },
    aboutXYears: {
      one: "takmynan 1 \xFDyl",
      other: "takmynan {{count}} \xFDyl"
    },
    xYears: {
      one: "1 \xFDyl",
      other: "{{count}} \xFDyl"
    },
    overXYears: {
      one: "1 \xFDyldan gowrak",
      other: "{{count}} \xFDyldan gowrak"
    },
    almostXYears: {
      one: "1 \xFDyl t\xF6weregi",
      other: "{count}} \xFDyl t\xF6weregi"
    }
  };
  var formatDistance = function formatDistance(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === "string") {
      result = tokenValue;
    } else if (count === 1) {
      result = tokenValue.one;
    } else {
      result = tokenValue.other.replace("{{count}}", count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return result + " so\u0148";
      } else {
        return result + " \xF6\u0148";
      }
    }
    return result;
  };

  // lib/locale/_lib/buildFormatLongFn.mjs
  function buildFormatLongFn(args) {
    return function () {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format = args.formats[width] || args.formats[args.defaultWidth];
      return format;
    };
  }

  // lib/locale/tk-TM/_lib/formatLong.mjs
  var dateFormats = {
    full: "EEEE, do MMMM, y",
    long: "do MMMM, y",
    medium: "d MMM, y",
    short: "dd/MM/yyyy"
  };
  var timeFormats = {
    full: "HH:mm:ss zzzz",
    long: "HH:mm:ss z",
    medium: "HH:mm:ss",
    short: "HH:mm"
  };
  var dateTimeFormats = {
    full: "{{date}} 'sagat' {{time}}",
    long: "{{date}} 'sagat' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: "full"
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: "full"
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: "full"
    })
  };

  // lib/locale/tk-TM/_lib/formatRelative.mjs
  var formatRelativeLocale = {
    lastWeek: "'ge\xE7en hepde' eeee 'sagat' p",
    yesterday: "'d\xFC\xFDn sagat' p",
    today: "'\u015Fu g\xFCn sagat' p",
    tomorrow: "'ertir sagat' p",
    nextWeek: "eeee 'sagat' p",
    other: "P"
  };
  var formatRelative = function formatRelative(token, _date, _baseDate, _options) {return formatRelativeLocale[token];};

  // lib/locale/_lib/buildLocalizeFn.mjs
  function buildLocalizeFn(args) {
    return function (value, options) {
      var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
      var valuesArray;
      if (context === "formatting" && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;
        var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }
      var index = args.argumentCallback ? args.argumentCallback(value) : value;
      return valuesArray[index];
    };
  }

  // lib/locale/tk-TM/_lib/localize.mjs
  var eraValues = {
    narrow: ["BE\xD6", "BES"],
    abbreviated: ["BE\xD6", "BES"],
    wide: ["Bizi\u0148 e\xFD\xFDammyzdan \xF6\xF1", "Bizi\u0148 e\xFD\xFDammyzdan so\xF1"]
  };
  var quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1\xC7", "2\xC7", "3\xC7", "4\xC7"],
    wide: ["1-nji \xE7\xE4r\xFDek", "2-nji \xE7\xE4r\xFDek", "3-nji \xE7\xE4r\xFDek", "4-nji \xE7\xE4r\xFDek"]
  };
  var monthValues = {
    narrow: ["\xDD", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
    abbreviated: [
    "\xDDan",
    "Few",
    "Mar",
    "Apr",
    "Ma\xFD",
    "I\xFDn",
    "I\xFDl",
    "Awg",
    "Sen",
    "Okt",
    "No\xFD",
    "Dek"],

    wide: [
    "\xDDanwar",
    "Fewral",
    "Mart",
    "Aprel",
    "Ma\xFD",
    "I\xFDun",
    "I\xFDul",
    "Awgust",
    "Sent\xFDabr",
    "Okt\xFDabr",
    "No\xFDabr",
    "Dekabr"]

  };
  var dayValues = {
    narrow: ["\xDD", "D", "S", "\xC7", "P", "A", "\u015E"],
    short: ["\xDDk", "D\u015F", "S\u015F", "\xC7r", "Pn", "An", "\u015En"],
    abbreviated: ["\xDDek", "Du\u015F", "Si\u015F", "\xC7ar", "Pen", "Ann", "\u015Een"],
    wide: [
    "\xDDek\u015Fenbe",
    "Du\u015Fenbe",
    "Si\u015Fenbe",
    "\xC7ar\u015Fenbe",
    "Pen\u015Fenbe",
    "Anna",
    "\u015Eenbe"]

  };
  var dayPeriodValues = {
    narrow: {
      am: "g\xF6",
      pm: "gs",
      midnight: "\xFDg",
      noon: "g\xFC",
      morning: "ir",
      afternoon: "gs",
      evening: "ag",
      night: "gi"
    },
    abbreviated: {
      am: "G\xD6",
      pm: "GS",
      midnight: "\xFDary gije",
      noon: "g\xFCnortan",
      morning: "irden",
      afternoon: "g\xFCnortandan so\u0148",
      evening: "ag\u015Fam",
      night: "gije"
    },
    wide: {
      am: "G.\xD6.",
      pm: "G.S.",
      midnight: "\xFDary gije",
      noon: "g\xFCnortan",
      morning: "irden",
      afternoon: "g\xFCnortandan so\u0148",
      evening: "ag\u015Fam",
      night: "gije"
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: "g\xF6",
      pm: "gs",
      midnight: "\xFDg",
      noon: "g\xFC",
      morning: "ir",
      afternoon: "gs",
      evening: "ag",
      night: "gi"
    },
    abbreviated: {
      am: "G\xD6",
      pm: "GS",
      midnight: "\xFDary gije",
      noon: "g\xFCnortan",
      morning: "irden",
      afternoon: "g\xFCnortandan so\u0148",
      evening: "ag\u015Fam",
      night: "gije"
    },
    wide: {
      am: "G.\xD6.",
      pm: "G.S.",
      midnight: "\xFDary gije",
      noon: "g\xFCnortan",
      morning: "irden",
      afternoon: "g\xFCnortandan so\u0148",
      evening: "ag\u015Fam",
      night: "gije"
    }
  };
  var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
    var number = Number(dirtyNumber);
    var rem100 = number % 100;
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
  var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: "wide"
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: "wide",
      argumentCallback: function argumentCallback(quarter) {return Number(quarter) - 1;}
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: "wide"
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: "wide"
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: "wide",
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: "wide"
    })
  };

  // lib/locale/_lib/buildMatchFn.mjs
  function buildMatchFn(args) {
    return function (string) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {return pattern.test(matchedString);}) : findKey(parsePatterns, function (pattern) {return pattern.test(matchedString);});
      var value;
      value = args.valueCallback ? args.valueCallback(key) : key;
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return { value: value, rest: rest };
    };
  }
  var findKey = function findKey(object, predicate) {
    for (var key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
        return key;
      }
    }
    return;
  };
  var findIndex = function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
    return;
  };

  // lib/locale/_lib/buildMatchPatternFn.mjs
  function buildMatchPatternFn(args) {
    return function (string) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var matchResult = string.match(args.matchPattern);
      if (!matchResult)
      return null;
      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);
      if (!parseResult)
      return null;
      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return { value: value, rest: rest };
    };
  }

  // lib/locale/tk-TM/_lib/match.mjs
  var matchOrdinalNumberPattern = /^(\d+)(-nji|-njy)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(beö|bes)/i,
    abbreviated: /^(beö|bes)/i,
    wide: /^(biziň eýýammyzdan öň|biziň eýýammyzdan soň)/i
  };
  var parseEraPatterns = {
    any: [/(^beö|^biziň eýýammyzdan öň)/i, /(^bes|^biziň eýýammyzdan soň)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^[1234]ç/i,
    wide: /^([1234]-nji çärýek)/i
  };
  var parseQuarterPatterns = {
    any: [/^1$/i, /^2$/i, /^3$/i, /^4$/i],
    abbreviated: [/^1Ç$/i, /^2Ç$/i, /^3Ç$/i, /^4Ç$/i],
    wide: [
    /^1-nji çärýek$/i,
    /^2-nji çärýek$/i,
    /^3-nji çärýek$/i,
    /^4-nji çärýek$/i]

  };
  var matchMonthPatterns = {
    narrow: /^[ýfmaisond]/i,
    abbreviated: /^(ýan|few|mar|apr|maý|iýn|iýl|awg|sen|okt|noý|dek)/i,
    wide: /^(ýanwar|fewral|mart|aprel|maý|iýun|iýul|awgust|sentýabr|oktýabr|noýabr|dekabr)/i
  };
  var parseMonthPatterns = {
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
    /^d/i],

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
    /^d/i]

  };
  var matchDayPatterns = {
    narrow: /^[ýdsçpaş]/i,
    short: /^(ýk|dş|sş|çr|pn|an|şn)/i,
    abbreviated: /^(ýek|duş|siş|çar|pen|ann|şen)/i,
    wide: /^(ýekşenbe|duşenbe|sişenbe|çarşenbe|penşenbe|anna|şenbe)/i
  };
  var parseDayPatterns = {
    narrow: [/^ý/i, /^d/i, /^s/i, /^ç/i, /^p/i, /^a/i, /^ş/i],
    any: [/^ý/i, /^d/i, /^s/i, /^ç/i, /^p/i, /^a/i, /^ş/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(gö|gs|ýg|gü|ir|ag|gi)$/i,
    any: /^(G\.Ö\.|G\.S\.|ýary gije|günortan|irden|günortandan soň|agşam|gije)$/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^G\.?Ö\.?/i,
      pm: /^G\.?S\.?/i,
      midnight: /^(ýg|ýary gije)$/i,
      noon: /^günortan$/i,
      morning: /^irden$/i,
      afternoon: /^günortandan soň$/i,
      evening: /^agşam$/i,
      night: /^gije$/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function valueCallback(value) {return parseInt(value, 10);}
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseEraPatterns,
      defaultParseWidth: "any"
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: "any",
      valueCallback: function valueCallback(index) {return index + 1;}
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: "any"
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: "wide",
      parsePatterns: parseDayPatterns,
      defaultParseWidth: "any"
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: "any",
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: "any"
    })
  };

  // lib/locale/tk-TM.mjs
  var tkTM = {
    code: "tk-TM",
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match,
    options: {
      weekStartsOn: 1,
      firstWeekContainsDate: 1
    }
  };

  // lib/locale/tk-TM/cdn.js
  window.dateFns = _objectSpread(_objectSpread({},
  window.dateFns), {}, {
    locale: _objectSpread(_objectSpread({}, (_window$dateFns =
    window.dateFns) === null || _window$dateFns === void 0 ? void 0 : _window$dateFns.locale), {}, {
      tkTM: tkTM }) });



  //# debugId=707C0F3482E0613964756E2164756E21
})();

//# sourceMappingURL=cdn.js.map