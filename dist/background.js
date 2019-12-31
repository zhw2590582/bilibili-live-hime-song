chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({ url: 'https://music.163.com/#/search/m/?s=' });
});
