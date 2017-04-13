//1. Create a AJAX request object (xhr). Create an xhr for each request object
let xhr = new XMLHttpRequest();

//2. Create a callback function
//onreadystatechange is event for any change in the ajax request object
xhr.onreadystatechange = function () {
      //This readyState is the final state. The object request is done.
      //readyState tracks progress as 0-4 
    if (xhr.readyState === 4 && xhr.status === 200) {
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


//Steps 1-4 can be done using JQuery's .load() function
$('#ajax').load('sidebar.html');

//api.jquery.com/category/ajax/shorthand-methods/

//a jquery get with ajax looks like...(no selector, call this on Jquery object itself)
$.get(url, data, callback);

//post also works
$.post(url, data, callback);


$(document).ready(function () {
    let url="../data/employees.json";

    //data is optional
    // $.getJSON(url, data, callback);
    $.getJSON(url, function (response) {
        let statusHTML = "<ul class='bulleted'>";
        $.each(response, fuction(index, employee) {
            if (employee.inoffice === true) {
                statusHTML += "<li class='in'>";
            } else {
                statusHTML += "<li class='out'>";
            }
            statusHTML += employee.name + '</li>';
        });
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
    });
}); //Can use this jquery instead of putting javascript at the bottom of the page


$('thing').each(arrayorobject, callback); //another nice jquery looper

//preventing form submit until some shit

$('form').submit(fucntion(evt) {
    evt.preventDefault(); //this is the part that disables it until something
    var url = $(this).attr("action");
    var formData = $(this).serialize(); //serialize is intersting
    $.post(url, formData, function(response) {
        $('#signup').html("<p>Thanks for signing up!</p>");
    });
  });
});

//All this ajax in jquery is building off of...
$.ajax(url, settings);

//To handle errors use .fail(fuction)
