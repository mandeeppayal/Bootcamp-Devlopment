let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
console.log("Sending Request");
let url = "https://www.espncricinfo.com/series/19322/scorecard/1187684/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20" ;
request(url,cb);
function cb(err,response,html){
    console.log("Recieved Response");
    if(err == null && response.statusCode == 200) {
        fs.writeFileSync("index.html",html);
        console.log("File Saved");
        parseHtml(html);
    }else if(response.statusCode == 404){
        console.log("Not Found");
    }else{
        console.log(err);
        console.log(response.statusCode);
    }
}
function parseHtml(html){
    console.log("Parsing html");
    let $ = cheerio.load(html);
    let elementArr = $('.card.content-block.match-scorecard-table td');
    console.log("----------------------------------------");
    let lbc = elementArr.text();
    console.log(lbc);
    console.log("----------------------------------------");
}

