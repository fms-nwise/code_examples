package com.wiseworks.hangman.model;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class WordBank {

    private List<String> mWords;

    public WordBank() {
        mWords = new ArrayList<String>();
    }


    public void importFrom(String fileName) {
        try (
                FileInputStream fis = new FileInputStream(fileName);
                BufferedReader reader = new BufferedReader(new InputStreamReader(fis));
        ) {
            String line;
            while ((line = reader.readLine()) != null) {
                addWord(line);
            }
        } catch (IOException ioe) {
            System.out.printf("Problems loading %s %n", fileName);
            ioe.printStackTrace();
        }
    }

    private void addWord(String word) {
        mWords.add(word);
    }

    public int getWordCount() {
        return mWords.size();
    }



}
