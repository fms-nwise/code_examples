package com.teamtreehouse.pomodoro.model;

//Note that this is an enum and not a class
//It's like a class for lists of constants that also have values like hashes
public enum AttemptKind {
    //Below should be 25 * 60, if not it was debug mode
    FOCUS(25 * 60, "Focus Time"),
    //Below should be 5 * 60 if not it was left on debug mode.
    BREAK(5 * 60, "Break Time");

    //Member Variables
    private int mTotalSeconds;
    private String mDisplayName;

    //Constructor
    AttemptKind(int totalSeconds, String displayName) {
        mTotalSeconds = totalSeconds;
        mDisplayName = displayName;
    }

    //Getters and Setters
    public int getTotalSeconds() {
        return mTotalSeconds;
    }

    public String getDisplayName() {
        return mDisplayName;
    }
}
