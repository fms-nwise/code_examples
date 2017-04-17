function Movie(title, year, duration) {
    Media.call(this, title, duration); //This is how you inherit from Media class
    this.year = year;
}

Movie.prototype = Object.create(Media.prototype); //This is also part of inheritance. Sets chain.

Movie.prototype.toHTML = function() {
    var htmlString = '<li';
    if (this.isPlaying) {
        htmlString += ' class="current"';
    }
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' [';
    htmlString += this.year;
    htmlString += '] ';
    htmlString += '<span class="duration">';
    htmlString += this.duration;
    htmlString += '</span></li>';
    return htmlString;
    
};