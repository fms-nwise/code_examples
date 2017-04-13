package com.teamtreehouse.reviews;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVPrinter;

import java.io.IOException;

/**
 * Created by nathan on 7/14/2016.
 */
public class Main {
    public static void  main(String[] args) {
        try {
            CSVPrinter printer = new CSVPrinter(System.out, CSVFormat.EXCEL);
            printer.printRecord("Craig", "Dennis", 5, "Loved it!");
            printer.printRecord("Nathan", "Woose", 3, "Fartable, absolutely fartable");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
