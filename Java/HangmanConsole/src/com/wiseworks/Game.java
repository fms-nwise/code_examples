package com.wiseworks;

public class Game {
    //Constants
    //Just a reminder that static means you can access this off the Game class itself
    public static final int MAX_MISSES = 7;
    //Member Variables
    private String mAnswer;
    private String mHits;
    private String mMisses;

    //Constructor
    public Game(String answer) {
        mAnswer = answer;
        mHits = "";
        mMisses = "";

    }

    //Validations
    //This validates that it's a letter, makes it lower case, and checks if it's been guessed
    private char validateGuess(char letter) {
        if (! Character.isLetter(letter)) {
            throw new IllegalArgumentException("A letter is required");
        }
        letter = Character.toLowerCase(letter);
        if (mMisses.indexOf(letter) >= 0 || mHits.indexOf(letter) >= 0) {
            throw new IllegalArgumentException(letter + " has already been guessed");
        }
        return letter;
    }

    //Methods
    public boolean applyGuess(String letters) {
        //This handles the case where they insert a string as a guess
        if (letters.length() == 0) {
            throw new IllegalArgumentException("No letter found");
        }
        return applyGuess(letters.charAt(0));
    }

    private boolean applyGuess(char letter) {
        //Apply the letter validator
        letter = validateGuess(letter);
        boolean isHit = mAnswer.indexOf(letter) >= 0;
        if (isHit) {
            mHits += letter;
        } else {
            mMisses += letter;
        }
        return isHit;
    }

    public String getCurrentProgress() {
        String progress = "";
        //For each loop below
        for (char letter : mAnswer.toCharArray()) {
            //Always label chars in single quotes!
            char display = '-';
            if (mHits.indexOf(letter) >= 0) {
                display = letter;
            }
            progress += display;
        }
        return progress;
    }

    public int getRemainingTries() {
        return MAX_MISSES - mMisses.length();
    }

    public String getAnswer() {
        return mAnswer;
    }

    public boolean isSolved() {
        return getCurrentProgress().indexOf('-') == -1;
    }


}

