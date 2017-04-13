//______REQUIREMENTS______________________________________________________________

//   ./ = is current directory
// Path is required but .js is not
const profile = require('./profile.js');


//________________________________________________________________________________


//___OUTPUTS______________________________________________________________________


//Refactor to pass arguments into call to run this file
const users = process.argv.slice(2);

//forEach shortened
users.forEach(profile.get);




