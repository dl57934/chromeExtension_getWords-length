document.querySelector("#insertZone").addEventListener("change",function () {
    chrome.tabs.executeScript({
        code:'document.querySelector("body").innerText;'
    },function (result) {
        var bodyText = result[0];
        var bodynum =bodyText.split(' ').length;
        var insertData = $('#insertZone').val();
        var mynum = bodyText.match(new RegExp("\\b("+insertData+")\\b","gi")).length;
        var per = mynum/bodynum*100;
        per = per.toFixed(1);

        document.getElementById("result").innerText = mynum+" / "+bodynum +"= "+ per+"%" ;

    });
});







