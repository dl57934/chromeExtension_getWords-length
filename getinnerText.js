var request = require('request'),
    cheerio = require('cheerio');

var url = "https://en.wikipedia.org/wiki/Gundam";

request(url,function (err,res,html) {
    var $ = cheerio.load(html);
    var bodyData = $.text();
    console.log(bodyData)
    var bodyNum = bodyData.split(' ').length;
    var mynum = bodyData.match(new RegExp('\\b(gundam)\\b',"gi")).length;
    console.log(mynum)
    var percent = mynum/bodyNum;
    console.log(percent*100+"%");
})

