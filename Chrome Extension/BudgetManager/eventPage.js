var contextMenuItem = {
  id: "spendMoney",
  title: "SpendMoney",
  contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuItem);

function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}

chrome.contextMenus.onClicked.addListener(function (clickData) {
  if (clickData.menuItemId == "spendMoney" && clickData.selectionText) {
    // var windowData = {
    //   url: "http://www.google.com",
    //   left: 200,
    //   top: 300,
    //   width: 300,
    //   height: 300,
    //   focused: true,
    //   type: "popup",
    // };
    // chrome.windows.create(windowData, function () {});
    // window.open("http://www.google.com", "mywindow");
    if (isInt(clickData.selectionText)) {
      chrome.storage.sync.get(["total", "limit"], function (budget) {
        var newTotal = 0;
        if (budget.total) {
          newTotal += parseInt(budget.total);
        }
        newTotal += parseInt(clickData.selectionText);
        chrome.storage.sync.set({ total: newTotal }, function () {
          if (newTotal >= budget.limit) {
            var notifOptions = {
              type: "basic",
              iconUrl: "money64.png",
              title: "Over Limit",
              message: "You reached the budget limit",
            };
            chrome.notifications.create("limitNotif4", notifOptions);
          }
        });
      });
    }
  }
});

chrome.storage.onChanged.addListener(function (changes, storageName) {
  chrome.browserAction.setBadgeText({
    text: changes.total.newValue.toString(),
  });
});
