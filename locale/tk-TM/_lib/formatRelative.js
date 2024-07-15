"use strict";
exports.formatRelative = void 0;

const formatRelativeLocale = {
  lastWeek: "'geçen hepde' eeee 'sagat' p",
  yesterday: "'düýn sagat' p",
  today: "'şu gün sagat' p",
  tomorrow: "'ertir sagat' p",
  nextWeek: "eeee 'sagat' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];
exports.formatRelative = formatRelative;
