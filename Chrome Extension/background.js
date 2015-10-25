
function notify(title, message) {
  var opt = {
    type: "basic",
    title: title,
    message: message,
    iconUrl: "save.png"
  };
  chrome.notifications.create("PushD", opt);
}

var stack = [];

chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    if (command === "pushd") {
      stack.push(tab.url);
      notify("Pushed URL", tab.url);
    } else if (command === "popd" && stack.length > 0) {
      var saved_url = stack.pop();
      chrome.tabs.update(tab.id, {url: saved_url});
      notify("Popped URL", tab.url);
    }
  });
});