package com.teamtreehouse.pomodoro.controllers;


import com.teamtreehouse.pomodoro.model.Attempt;
import com.teamtreehouse.pomodoro.model.AttemptKind;
import javafx.animation.Animation;
import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Label;
import javafx.scene.control.TextArea;
import javafx.scene.layout.VBox;
import javafx.scene.media.AudioClip;
import javafx.util.Duration;

public class Home {
    //These are hooks into our FXML document called home.
    @FXML
    private VBox container;

    @FXML
    private Label title;

    @FXML
    private TextArea message;

    private Attempt mCurrentAttempt;
    //The following is a JavaFX.beans property
    //Properties belong in the same category as Getters and Setters
    private StringProperty mTimerText;
    //playButtonText is my own design, to make the button initially say start instead of resume. May not be the best.
    private StringProperty mPlayButtonText;
    private Timeline mTimeline;
    private final AudioClip mApplause;

    //Constructor
    public Home() {
        mTimerText = new SimpleStringProperty();
        mPlayButtonText = new SimpleStringProperty();
        setTimerText(0);
        setPlayButtonText("Start");
        mApplause = new AudioClip(getClass().getResource("/sounds/applause.mp3").toExternalForm());
    }

    public String getTimerText() {
        return mTimerText.get();
    }

    public String getPlayButtonText() {
        return mPlayButtonText.get();
    }

    public StringProperty timerTextProperty() {
        return mTimerText;
    }

    public StringProperty playButtonTextProperty() {
        return mPlayButtonText;
    }

    public void setTimerText(String timerText) {
        mTimerText.set(timerText);
    }

    //METHOD OVERLOADING STRING VERSION ABOVE BRAH
    public void setTimerText(int remainingSeconds) {
        int minutes = remainingSeconds / 60;
        int seconds = remainingSeconds % 60;
        setTimerText(String.format("%02d:%02d",minutes,seconds));
    }

    public void setPlayButtonText(String playButtonText) {
        mPlayButtonText.set(playButtonText);
    }

    //This is akin to a constructor
    private void prepareAttempt(AttemptKind kind) {
        reset();
        mCurrentAttempt = new Attempt("", kind);
        addAttemptStyle(kind);
        title.setText(kind.getDisplayName());
        setTimerText(mCurrentAttempt.getRemainingSeconds());
        mTimeline = new Timeline();
        mTimeline.setCycleCount(kind.getTotalSeconds());
        mTimeline.getKeyFrames().add(new KeyFrame(Duration.seconds(1), e -> {
            mCurrentAttempt.tick();
            setTimerText(mCurrentAttempt.getRemainingSeconds());
        }));
        //Lambda AND Ternary...Fancy!
        //Ternary says: if current attempt is focus set next kind to break,
        //otherwise set it to focus
        mTimeline.setOnFinished(e -> {
            saveCurrentAttempt();
            mApplause.play();
            container.getStyleClass().remove("playing");
            setPlayButtonText("Start");
            prepareAttempt(mCurrentAttempt.getKind() == AttemptKind.FOCUS ?
                                    AttemptKind.BREAK : AttemptKind.FOCUS);
        });
    }

    private void saveCurrentAttempt() {
        mCurrentAttempt.setMessage(message.getText());
        mCurrentAttempt.save();
    }

    private void reset() {
        clearAttemptStyles();
        if (mTimeline != null && mTimeline.getStatus() == Animation.Status.RUNNING) {
            mTimeline.stop();
        }
    }

    public void playTimer() {
        //This chunk was done better by instructor on handlePlay

   /*     if (mTimeline != null) {
            mTimeline.play();
        } else {
            prepareAttempt(AttemptKind.FOCUS);
            mTimeline.play();
        }*/


        //Style class is literally referring to a CSS class called playing
        mTimeline.play();
    }

    public void pauseTimer() {
        mTimeline.pause();
        container.getStyleClass().remove("playing");
    }

    private void addAttemptStyle(AttemptKind kind) {
        //This happens to return a list
        container.getStyleClass().add(kind.toString().toLowerCase());
    }

    private void clearAttemptStyles() {
        //values is an enum thing and it loops us through them
        for (AttemptKind kind : AttemptKind.values()) {
            container.getStyleClass().remove(kind.toString().toLowerCase());
        }
        container.getStyleClass().remove("playing");
    }

    public void handleRestart(ActionEvent actionEvent) {
        prepareAttempt(AttemptKind.FOCUS);
        playTimer();
        container.getStyleClass().add("playing");
    }

    public void handlePlay(ActionEvent actionEvent) {
        if (mCurrentAttempt == null) {
            handleRestart(actionEvent);
        } else {
            playTimer();
        }
        container.getStyleClass().add("playing");
    }

    public void handlePause(ActionEvent actionEvent) {
        pauseTimer();
        setPlayButtonText("Resume");
        container.getStyleClass().remove("playing");
    }
}
