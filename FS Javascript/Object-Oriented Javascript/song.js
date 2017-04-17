function Song(title, artist, duration) {
    Media.call(this, title, duration); //This is how you inherit from Media class
    this.artist = artist;
}

Song.prototype = Object.create(Media.prototype); //This is also part of inheritance. Sets chain.

Song.prototype.toHTML = function() {
    var htmlString = '<li';
    if (this.isPlaying) {
        htmlString += ' class="current"';
    }
    htmlString += '>';
    htmlString += this.title;
    htmlString += ' - ';
    htmlString += this.artist;
    htmlString += '<span class="duration">';
    htmlString += this.duration;
    htmlString += '</span></li>';
    return htmlString;
    
};