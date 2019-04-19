export const dateFormat = (date, fmt) => {
  date = new Date(date);
  const o = {
    'M+': date.getMonth() + 1, //月份
    'D+': date.getDate(), //日
    'H+': date.getHours(), //小时
    'h+': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    S: date.getMilliseconds(), //毫秒
    X: '星期' + '日一二三四五六'.charAt(date.getDay()),
    W: new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday')[date.getDay()],
    w: new Array('Sun.', 'Mon.', ' Tues.', 'Wed.', ' Thur.', 'Fri.', 'Sat.')[date.getDay()]
  };
  if (/(Y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
  return fmt;
};

// { name: '2017年1月1日 08:00:00', value: 'YYYY年M月D日 HH:mm:ss' },
// { name: '2017年01月01日 08:00:00', value: 'YYYY年MM月DD日 HH:mm:ss' },
// { name: '2017-1-1 08:00:00', value: 'YYYY-M-D HH:mm:ss' },
// { name: '2017-01-01 08:00:00', value: 'YYYY-MM-DD HH:mm:ss' },
// { name: '2017.1.1 08:00:00', value: 'YYYY.M.D HH:mm:ss' },
// { name: '2017.01.01 08:00:00', value: 'YYYY.MM.DD HH:mm:ss' },
// { name: '2017年1月1日', value: 'YYYY年M月D日' },
// { name: '2017年01月01日', value: 'YYYY年MM月DD日' },
// { name: '2017-1-1', value: 'YYYY-M-D' },
// { name: '2017-01-01', value: 'YYYY-MM-DD' },
// { name: '2017.1.1', value: 'YYYY.M.D' },
// { name: '2017.01.01', value: 'YYYY.MM.DD' },
// { name: '1月1日', value: 'M月D日' },
// { name: '01月01日', value: 'MM月DD日' },
// { name: '01月01日01时', value: 'MM月DD日HH时' },
// { name: '1-1', value: 'M-D' },
// { name: '01-01', value: 'MM-DD' },
// { name: '1.1', value: 'M.D' },
// { name: '01.01', value: 'MM.DD' },
// { name: '1月', value: 'M月' },
// { name: '01月', value: 'MM月' },
// { name: '1(月)', value: 'M' },
// { name: '01(月)', value: 'MM' },
// { name: '1日', value: 'D日' },
// { name: '01日', value: 'DD日' },
// { name: '1(日)', value: 'D' },
// { name: '01(日)', value: 'DD' },
// { name: '08:00:00', value: 'HH:mm:ss' },
// { name: '08:00', value: 'HH:mm' },
// { name: '星期一', value: 'X' },
// { name: 'Monday', value: 'W' },
// { name: 'Mon', value: 'w' }
