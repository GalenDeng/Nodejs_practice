//事件驱动
function clickIt(e) {
  window.alert('Button is clicked');  //显示字符串
}
var button = document.getElementById('#button');
button.addEventListener('click',clickIt);

