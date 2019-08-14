chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    let link = document.getElementById("inputLink")
    link.value = url;
});


$("a").click(function(){

        /* Get the text field */
        var copyText = document.getElementById("inputLink");
      
        /* Select the text field */
        copyText.select();
      
        /* Copy the text inside the text field */
        document.execCommand("copy");


})

