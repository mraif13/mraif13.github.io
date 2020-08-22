var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () {
      showText(target, message, index, interval);
    }, interval);
  }
};
$(function () {
  showText("#msg", "Under Maintenance...", 0, 100);
});
$(document).ready(function () {
  setTimeout("$('#fname').focus();", 500);
});
