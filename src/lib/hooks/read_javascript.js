// 定义一个函数用于循环加载 JS 文件
function loadScripts(scripts, callback) {
  var i = 0;

  function loadScript() {
    if (i == scripts.length) {
      if (callback) {
        callback();
      }
      return;
    }

    var script = document.createElement('script');
    script.src = scripts[i];
    script.onload = function() {
      i++;
      loadScript();
    };
    document.head.appendChild(script);
  }

  loadScript();
}

// 设置需要引入的文件路径数组
var scriptsToLoad = [
  './js/my_js/ability_function.js',
  './js/my_js/movement.js',
  './js/my_js/movement_move.js',
  './js/my_js/movement_package.js',
  './js/my_js/movement_team.js',

  './js/my_js/outside.js',

  './js/my_js/city_css_function.js',
  './js/my_js/city_shop.js',
  './js/my_js/city_select.js',
  './js/my_js/city_buyBlock.js',

  './js/my_js/character_equipment.js',

  './js/my_js/effect_basic.js',

  './js/my_js/information_jianjie.js',
  './js/my_js/information_logs.js',

  './js/my_js/start.js',
  './js/my_js/start_newgame.js',
  './js/my_js/start_oldgame.js',

  './js/my_js/main.js',
];

// 调用函数以批量加载所有 JS 文件并执行回调函数
loadScripts(scriptsToLoad, function() {
  console.log('All scripts have been loaded!');
});
