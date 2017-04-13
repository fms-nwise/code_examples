// After you've completed the TODOs locally paste Main.java here

package com.teamtreehouse;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.List;

public class Main {

    public static void main(String[] args) {

        Prompter prompt = new Prompter();
        Template tmpl = null;

        try {
            tmpl = new Template(prompt.promptForStory());
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }

        prompt.run(tmpl);

    }
}