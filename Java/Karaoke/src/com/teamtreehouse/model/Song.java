package com.teamtreehouse.model;

public class Song {
    protected String mArtist;
    protected String mTitle;
    protected String mVideoUrl;

    public Song(String artist, String title, String videoUrl) {
        mArtist = artist;
        mTitle = title;
        mVideoUrl = videoUrl;
    }

    public String getTitle() {
        return mTitle;
    }

    public String getArtist() {
        return mArtist;
    }

    public String getVideoUrl() {
        return mVideoUrl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Song song = (Song) o;

        if (mArtist != null ? !mArtist.equals(song.mArtist) : song.mArtist != null) return false;
        if (mTitle != null ? !mTitle.equals(song.mTitle) : song.mTitle != null) return false;
        return mVideoUrl != null ? mVideoUrl.equals(song.mVideoUrl) : song.mVideoUrl == null;

    }

    @Override
    public int hashCode() {
        int result = mArtist != null ? mArtist.hashCode() : 0;
        result = 31 * result + (mTitle != null ? mTitle.hashCode() : 0);
        result = 31 * result + (mVideoUrl != null ? mVideoUrl.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return String.format("Song:  %s by %s", mTitle, mArtist);
    }
}