(function() {
  let devtools = /./;
  devtools.toString = function() {
    document.body.innerHTML = '<h1>gahh! you found me! your reward is an honorary cat gif, dm me on discord to claim your prize</h1>';
  };

  setInterval(function() {
    console.log(devtools);
  }, 1000);
})();
