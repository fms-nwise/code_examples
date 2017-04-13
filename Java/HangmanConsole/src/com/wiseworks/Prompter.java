package com.wiseworks;

//Import Packages
import java.io.BufferedReader;
import java.io.Console;
import java.io.IOException;
import java.io.InputStreamReader;


public class Prompter {
    //Member Variables
    private Game mGame;
    private BufferedReader mReader;

    //Constructor
    public Prompter(Game game) {
        mGame = game;
        mReader = new BufferedReader(new InputStreamReader(System.in));
    }

    public void play() throws IOException {
        while (mGame.getRemainingTries() > 0 && !mGame.isSolved()) {
            displayProgress();
            promptForGuess();
        }
        if (mGame.isSolved()) {
            System.out.printf("Grats dude, the word was %s and you won with %d tries left\n",
                    mGame.getAnswer(),
                    mGame.getRemainingTries());
        } else {
            System.out.printf("Bummer the word was %s.\n",
                    mGame.getAnswer());
        }
    }

    //Methods
    private boolean promptForGuess() throws IOException {
        //Build a Console object. As in the terminal thing.
        boolean isHit = false;
        boolean isValidGuess = false;
        //Get the guess input
        while (! isValidGuess) {
            System.out.print("Enter a letter:    ");
            String guessAsString = mReader.readLine();
            try {
                isHit = mGame.applyGuess(guessAsString);
                isValidGuess = true;
            } catch (IllegalArgumentException error) {
                System.out.printf("%s.  Please try again.\n", error.getMessage());
            }
        }
        return isHit;
    }

    private void displayProgress() {
        //%d means decimal and it's the formatter for integer

        System.out.printf("You have %d tries left to solve:  %s\n",
                mGame.getRemainingTries(),
                mGame.getCurrentProgress());
    }


}

