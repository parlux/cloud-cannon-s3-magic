chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.insertCSS(null, {file: 'app/css/style.css'})
  chrome.tabs.executeScript(null, {file: 'app/js/vendor/aws-sdk-2.4.0.min.js'})
  chrome.tabs.executeScript(null, {file: 'app/js/helpers.js'})
  chrome.tabs.executeScript(null, {file: 'app/js/template.js'})
  chrome.tabs.executeScript(null, {file: 'app/js/constants.js'})
  chrome.tabs.executeScript(null, {file: 'app/js/services/s3.js'})
  chrome.tabs.executeScript(null, {file: 'app/js/components/image-drawer.js'})
  chrome.tabs.executeScript(null, {file: 'app/js/components/image-list.js'})
  chrome.tabs.executeScript(null, {file: 'app/js/components/image.js'})
  chrome.tabs.executeScript(null, {file: 'app/js/components/search.js'})
  chrome.tabs.executeScript(null, {file: 'app/js/components/uploader.js'})
  chrome.tabs.executeScript(null, {file: 'app/js/app.js'})
})
