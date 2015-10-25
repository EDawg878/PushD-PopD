
function Notify(tab) {
    chrome.notifications.create('PushD', {
        type: 'list',
        title: "My First Popup",
        message: "My First Message",
        iconUrl: 'icon_128.png',
        items: [{ title: "PushD", message: tab.url}]
     });
}
var stack = [];
chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    var tab = tabs[0];
    if (command === "pushd") {
      stack.push(tab.url);
      Notify(tab);
    } else if (command === "popd" && stack.length > 0) {
      var saved_url = stack.pop();
      chrome.tabs.update(tab.id, {url: saved_url});
      Notify(tab);
    }
  });
});