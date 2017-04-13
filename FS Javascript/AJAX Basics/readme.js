//1. Create a AJAX request object (xhr). Create an xhr for each request object
let xhr = new XMLHttpRequest();

//2. Create a callback function
//onreadystatechange is event for any change in the ajax request object
xhr.onreadystatechange = function () {
      //This readyState is the final state. The object request is done. 
    if (xhr.readyState === 4) {
        //sets xhr response text into div
        document.getElementById('ajax').innerHTML = xhr.responseText;
    }
};

//3. Ready the browser to make the reqeust
xhr.open('GET', 'sidebar.html');

//4. Send the request object. Arguments optional. 
xhr.send();

// & space and + have special meanings in url. also ?

//url-encode-decode.com

//Browser's Same Origin Policy

//1. AJAX is generally used to communicate with your own server (if not same server and not same origin it is forbidden)
//2. Can't switch between HTTP and HTTPS
//3. Can't switch between ports
//4. Can't switch hosts

//To get around this you use a web proxy. Setup a webserver to talk to other webservers on your own server and use ajax to talk between view and your server.


//Or use JSONP - JSON with Padding

//New W3C tech is: CORS - Cross-Origin Resource Sharing
