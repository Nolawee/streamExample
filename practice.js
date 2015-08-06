var d3 = require('d3')

var familyMembers = ['Jon', 'James','Robert','Mary'];
familyMembers = familyMembers.map(function (member){
	return member + ' Jones'
});

newData = d3.range(4).map(function(){
	return d3.range(3).map(Math.random);
})

console.log(familyMembers)