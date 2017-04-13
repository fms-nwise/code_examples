//______REQUIREMENTS______________________________________________________________
const https = require('https');
const http  = require('http');
//________________________________________________________________________________


//______FUNCTIONS_________________________________________________________________

//Print Error Messages
function printError(error) {
    console.error(error.message);
}

//Function to print message to console
function printMessage(username, badgeCount, points) {
    const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
    console.log(message);
}


function getProfile(username) {
    try {
            const request = https.get(`https://teamtreehouse.com/${username}.json`, (res) => {
        
            if (res.statusCode === 200) {
                  let body = "";
                //Data is always the data response
                  res.on('data', (d) => {
                      body += d.toString();
                  }); //End res data

                //End is always in a response
                  res.on('end', () => {
                      try {
                        //Parse the data
                        const profile = JSON.parse(body);

                        printMessage(username,profile.badges.length,profile.points.JavaScript);
                      } catch (error) {
                          printError(error);
                      }

                      }); //End res end
            } else {
                    const message = `There was an error getting the profiles for ${username} (${res.statusCode}) (${http.STATUS_CODES[res.statusCode]})`;
                    const statusCodeError = new Error(message);
                    printError(statusCodeError);
            } // End if else for statuscode

            }).on('error', (e) => {
              console.error(e);
            }); //End request
    } catch (error) {
        printError(error);
    }
}; //End getProfile

//________________________________________________________________________________

//API Exports functions
module.exports.get = getProfile

//.get after exports is what you want to call it from the outside. it could be anything