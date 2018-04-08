
chrome.tabs.executeScript({
    code:'document.querySelector("body").innerText;'
},function (result) {
   var bodyText = result[0];
   var bodynum =bodyText.split(' ').length;
   var mynum = bodyText.match(new RegExp("\\b(the|a)\\b","gi")).length;
   var per = mynum/bodynum*100;
   per = per.toFixed(1);
    document.getElementById("result").innerText = mynum+" / "+bodynum +"= "+ per+"%"
});