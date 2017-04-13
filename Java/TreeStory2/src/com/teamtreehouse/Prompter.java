// After you've completed the TODOs locally paste Prompter.java here

package com.teamtreehouse;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.ConsoleHandler;


public class Prompter {
    private BufferedReader mReader;
    private Set<String> mCensoredWords;

    public Prompter() {
        mReader = new BufferedReader(new InputStreamReader(System.in));
        loadCensoredWords();
    }

    private void loadCensoredWords() {
        mCensoredWords = new HashSet<String>();
        Path file = Paths.get("resources", "censored_words.txt");
        List<String> words = null;
        try {
            words = Files.readAllLines(file);
        } catch (IOException e) {
            System.out.println("Couldn't load censored words");
            e.printStackTrace();
        }
        mCensoredWords.addAll(words);
    }

    public void run(Template tmpl) {
        List<String> results = null;
        try {
            results = promptForWords(tmpl);
        } catch (IOException e) {
            System.out.println("There was a problem prompting for words");
            e.printStackTrace();
            System.exit(0);
        }

        System.out.printf("Your TreeStory:%n%n%s", tmpl.render(results));
    }

    /**
     * Prompts user for each of the blanks
     *
     * @param tmpl The compiled template
     * @return
     * @throws IOException
     */
    public List<String> promptForWords(Template tmpl) throws IOException {
        List<String> words = new ArrayList<String>();
        for (String phrase : tmpl.getPlaceHolders()) {
            String word = promptForWord(phrase);
            words.add(word);
        }
        return words;
    }


    /**
     * Prompts the user for the answer to the fill in the blank.  Value is guaranteed to be not in the censored words list.
     *
     * @param phrase The word that the user should be prompted.  eg: adjective, proper noun, name
     * @return What the user responded
     */
    public String promptForWord(String phrase) throws IOException{
        String input = "";

        do {
            System.out.printf("Enter a %s %n", phrase);
            input = mReader.readLine();
        } while( mCensoredWords.contains(input.toLowerCase()) );

        return input.trim();
    }

    public String promptForStory() throws IOException{
        System.out.println("Make a story! Write a fill in the blank story with an underscore on each side of the variable like _noun/adjective/etc_");
        String story = mReader.readLine();

        // default if user is too lazy to type a story.
        if( story.equals("") ){
            story = "Hello __noun__ i am feeling __adjective__ today!";
        }

        return story;
    }
}