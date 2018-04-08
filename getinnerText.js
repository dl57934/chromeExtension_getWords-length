var request = require('request'),
    cheerio = require('cheerio');

var url = "https://en.wikipedia.org/wiki/Gundam";

request(url,function (err,res,html) {
    var $ = cheerio.load(html);
    var bodyData = $.text();
    var bodyNum = bodyData.split(' ').length;
    console.log(bodyData.match(new RegExp("\\bthe\\b","gi")).length);
})

