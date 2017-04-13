package com.teamtreehouse.model;

public class SongRequest {
    //Member Variables
    private String mSingerName;
    private Song mSong;

    //Constructor
    public SongRequest(String singerName, Song song) {
        mSingerName = singerName;
        mSong = song;
    }

    //Getters//////////////////////////////////////////

    public String getSingerName() {
        return mSingerName;
    }

    public Song getSong() {
        return mSong;
    }


    //Setters//////////////////////////////////////////

    public void setSingerName(String singerName) {
        mSingerName = singerName;
    }

    public void setSong(Song song) {
        mSong = song;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SongRequest that = (SongRequest) o;

        if (!mSingerName.equals(that.mSingerName)) return false;
        return mSong.equals(that.mSong);

    }

    @Override
    public int hashCode() {
        int result = mSingerName.hashCode();
        result = 31 * result + mSong.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "SongRequest{" +
                "mSingerName='" + mSingerName + '\'' +
                ", mSong=" + mSong +
                '}';
    }
}
