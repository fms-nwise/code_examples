import com.wiseworks.Game;
import com.wiseworks.Prompter;
import com.wiseworks.WordBank;

import java.io.IOException;

public class Hangman {

    public static void main(String[] args) throws IOException {
        //args come after the file name in console command to run this
        // Enter amazing code here:


  /*      if (args.length == 0) {
            System.out.println("Please enter a word");
            //exit code 0 means we meant this to happen
            System.exit(0);
        }*/
        //Game game = new Game(args[0]);
        WordBank wordBank = new WordBank();
        wordBank.importFrom("words.txt");
        Game game = new Game(wordBank.getRandomWord());
        Prompter prompter = new Prompter(game);
        prompter.play();
    }

}