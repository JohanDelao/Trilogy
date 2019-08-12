var database = firebase.database().ref();

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    database.push(url);
    console.log(url);
    return url;
});
