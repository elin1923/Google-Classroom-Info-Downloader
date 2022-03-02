javascript:(function() {
    fetch('https://raw.githubusercontent.com/elin1923/Google-Classroom-Info-Downloader/main/script.js').then((res)=>res.text()).then(text=>console.log(eval(text)));
  
}());
