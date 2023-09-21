



var http = require('http');

http.createServer(function (req, res) {
    console.log(req.url)

    var person1={
        firstName:"Jack",
        lastName:"smith",
        fullName: this.firstName + " "+this.lastName


    };
    var person2={
        firstName:"Jack",
        lastName:"smith",
        fullName:this.firstName + " "+this.lastName


    };
    var person3={
        firstName:"Jack",
        lastName:"smith",
        fullName: this.firstName + " "+this.lastName


    };
    var person4={
        firstName:"Jack",
        lastName:"smith",
        fullName:this.firstName + " "+this.lastName


    };
    var person5={
        firstName:"Jack",
        lastName:"smith",
        fullName: this.firstName + " "+this.lastName


    };
    var person6={
        firstName:"Jack",
        lastName:"smith",
        fullName:this.firstName + " "+this.lastName


    };
    var persons=[person1,person2,person3,person4,person5,person6]

    res.writeHead(200, {'Content-Type': 'application/json'});

    if (req.url == '/user') {
        res.end(JSON.stringify(persons));
    } else if (req.url == '/user/20') {
        res.end('{"name":"armin","id":1,"access":true , "number":"+9909218967662"}');
    } else {
        res.end('{"massage":"404 NOT_F"}');

    }
}).listen(8080);