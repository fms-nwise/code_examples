package com.teamtreehouse.pomodoro.model;


public class Attempt {
    private String mMessage;
    private int mRemainingSeconds;
    private AttemptKind mKind;

    public Attempt(String message, AttemptKind kind) {
        mMessage = message;
        mKind = kind;
        mRemainingSeconds = kind.getTotalSeconds();
    }

    public String getMessage() {
        return mMessage;
    }

    public int getRemainingSeconds() {
        return mRemainingSeconds;
    }

    public AttemptKind getKind() {
        return mKind;
    }

    public void setMessage(String message) {
        mMessage = message;
    }

    //This simply decrements the remaining time by 1
    public void tick() {
        mRemainingSeconds--;
    }

    //keyword this refers to THIS instance
    public void save() {
        System.out.printf("Saving: %s %n", this);
    }

    @Override
    public String toString() {
        return "Attempt{" +
                "mMessage='" + mMessage + '\'' +
                ", mRemainingSeconds=" + mRemainingSeconds +
                ", mKind=" + mKind +
                '}';
    }
}
