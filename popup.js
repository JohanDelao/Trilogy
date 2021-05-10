// Gets the URL and then displays it in the textbox in the Middle section
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    let link = document.getElementById("inputLink")
    link.value = url;
});

// When the user clicks on one of the logos, it will copy the url.
$("a").click(function(){

        /* Get the text field */
        var copyText = document.getElementById("inputLink");
      
        /* Select the text field */
        copyText.select();
      
        /* Copy the text inside the text field */
        document.execCommand("copy");


})

// When user clicks copy button in middle section, it copys the current url.
$("#youngGrasshopper").click(function(){
     /* Get the text field */
     var copyText = document.getElementById("inputLink");
      
     /* Select the text field */
     copyText.select();
   
     /* Copy the text inside the text field */
     document.execCommand("copy");

     const element =  document.querySelector('#youngGrasshopper')
     element.classList.add('animated', 'flash')

})

// Code for dark mode from website
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}


toggleSwitch.addEventListener('change', switchTheme, false);
