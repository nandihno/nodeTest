var express = require('express');
var app = express();
/*
app.get("/",function(req,res) {
	res.send("Hello world from server.js");

});
*/
app.use(express.static(__dirname + "/public"));
app.get("/contactList",function(req,res) {
	console.log("I got a get request");
	person1 = {
		name:"Nando",
		email:"nando@nando.com",
		number:"1234343"
	};
	person2 = {
		name:"gogo",
		email:"gog@gog.com",
		number:"234234"
	};
	person3 = {
		name:"gigig",
		email:"john@jj.com",
		number:"4343434"
	};
	var contactList = [person1,person2,person3];
	res.json(contactList);
});

app.get("/version",function(req,res) {
	var creator = {
		name:"Nandihno",
		year:"2016",
		version:"1"
	};
	res.json(creator);

});


app.listen(3000);
console.log("server running on port 3000");
