function matching(insertData) {
    chrome.tabs.executeScript({
        code:'document.querySelector("body").innerText;'
    },function (result) {
        var bodyText = result[0];
        var bodynum =bodyText.split(' ').length;
        var mynum = bodyText.match(new RegExp("\\b("+insertData+")\\b","gi")).length;
        if (mynum != null) {
            var per = mynum / bodynum * 100;
            per = per.toFixed(1);
            document.getElementById("result").innerText = mynum + " / " + bodynum + "= " + per + "%";
        }else{
            document.getElementById("result").innerText = "0%";
        }


    });
}

chrome.storage.sync.get(function(data){
   document.querySelector("#insertZone").value = data.userWords;
   matching(data.userWords);
});
document.querySelector("#insertZone").addEventListener("change",function () {
    var insertData = document.querySelector("#insertZone").value;
    chrome.storage.sync.set({
       userWords:insertData
    });
    matching(insertData);
});







