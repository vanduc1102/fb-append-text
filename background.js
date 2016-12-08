//The main function.
LOGGER("Background is running");
var fbUrl = '.facebook.com';
// chrome.browserAction.onClicked.addListener(function(tab) {
//     LOGGER('chrome.browserAction.onClicked.addListener');
//     try {
//         executeScripts(null, [
//             { file: "libs/jquery.js" },
//             { file: "scripts/utils.js" },
//             { file: "scripts/content-script.js" }
//         ]);
//     } catch (e) {
//         console.log('Exception on chrome.browserAction.onClicked');
//     }
// });

// function executeScripts(tabId, injectDetailsArray) {
//     function createCallback(tabId, injectDetails, innerCallback) {
//         return function() {
//             chrome.tabs.executeScript(tabId, injectDetails, innerCallback);
//         };
//     }

//     var callback = null;

//     for (var i = injectDetailsArray.length - 1; i >= 0; --i)
//         callback = createCallback(tabId, injectDetailsArray[i], callback);

//     if (callback !== null)
//         callback(); // execute outermost function
// }
