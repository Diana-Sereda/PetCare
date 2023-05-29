import replace from "gulp-replace"; //Плагин поиска и замены
import plumber from "gulp-plumber"; //Плагин помогающий обработать возникающие ошибки
import notify from "gulp-notify"; //Плагин уведомления об ошибке
import browsersync from "browser-sync"; // life server
import newer from "gulp-newer"; //Проверка обновлений картинки
import ifPlugin from "gulp-if"; //Условное ветвление

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin,
};
