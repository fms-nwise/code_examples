package com.wiseworks.hangman.model;


//Import Packages
import java.io.Console;


public class Prompter {
    //Member Variables
    private Game mGame;

    //Constructor
    public Prompter(Game game) {
        mGame = game;
    }

    public void play() {
        while (mGame.getRemainingTries() > 0 && !mGame.isSolved()) {
            displayProgress();
            promptForGuess();
        }
        if (mGame.isSolved()) {
            System.out.printf("Grats fucker you won with %d tries left\n",
                    mGame.getRemainingTries());
        } else {
            System.out.printf("Bummer the word was %s.\n",
                    mGame.getAnswer());
        }
    }

    //Methods
    public boolean promptForGuess() {
        //Build a Console object. As in the terminal thing.
        Console console = System.console();
        boolean isHit = false;
        boolean isValidGuess = false;
        //Get the guess input
        while (! isValidGuess) {
            String guessAsString = console.readLine("Enter a letter:  ");
            try {
                isHit = mGame.applyGuess(guessAsString);
                isValidGuess = true;
            } catch (IllegalArgumentException error) {
                console.printf("%s.  Please try again.\n", error.getMessage());
            }
        }
        return isHit;
    }

    public void displayProgress() {
        //%d means decimal and it's the formatter for integer

        System.out.printf("You have %d tries left to solve:  %s\n",
                mGame.getRemainingTries(),
                mGame.getCurrentProgress());
    }


}

