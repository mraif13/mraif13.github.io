var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () {
      showText(target, message, index, interval);
    }, interval);
  }
};
$(function () {
  showText("#msg", "Raif C.", 0, 100);
  showText("#msg1", "Under Maintenance......", 0, 100);
  showText("#msg3", "¯_(ツ)_/¯", 0, 100);
});
$(document).ready(function () {
  setTimeout("$('#fname').focus();", 500);
});
