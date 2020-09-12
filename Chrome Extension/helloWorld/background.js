var contextMenuItem = {
  id: "HelloWorld",
  title: "Testing Modal",
  contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function (clickData) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { type: "openModal" });
  });
});

// chrome.contextMenus.onClicked.addListener(function (clickData) {
//   if (clickData.menuItemId == "HelloWorld" && clickData.selectionText) {
//     var windowData = {
//       url: "http://www.google.com",
//       left: 200,
//       top: 300,
//       width: 300,
//       height: 300,
//       focused: true,
//       type: "popup",
//     };
//     // chrome.windows.create(windowData, function () {});
//     // window.open("http://www.google.com", "mywindow");

//     var iframe = document.createElement("iframe");
//     iframe.src = chrome.extension.getURL("modal.html");
//   }
// });
