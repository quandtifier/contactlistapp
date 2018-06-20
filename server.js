var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
app.use(express.static(__dirname + "/public"));
//app.use(bodyParser.json());
app.get('/contactlist', function (req, res) {
    console.log("I recieved a get request");

    person1 = { 
        name: 'Tim',
        email: 'tim@email.com',
        number: '(111) 111-1111'
    };
    person2 = { 
        name: 'Emily',
        email: 'emily@email.com',
        number: '(222) 222-2222'
    };
    person3 = { 
        name: 'John',
        email: 'john@email3.com',
        number: '(333) 333-3333'
    };

    var contactlist = [person1,person2,person3];

    res.send(contactlist);
});
app.listen(3000);
console.log("Server running on port 3000");