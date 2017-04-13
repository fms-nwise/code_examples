package com.teamtreehouse.vending;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

/**
 * Created by nathan on 7/14/2016.
 */
public class CreditorTest {

    private Creditor creditor;

    @Before
    public void setUp() throws Exception {
        creditor = new Creditor();

    }

    @Test
    public void addingFundsIncrementsAvailableFunds() throws Exception {
        /*Arrange*/
        //Now done in @Before fixture
        /*Act*/
        creditor.addFunds(25);
        creditor.addFunds(25);
        /*Assert: assertEquals() variable order is very important. Expected followed by Actual*/
        assertEquals(50, creditor.getAvailableFunds());

    }

    @Test
    public void refundingReturnsAllAvailableFunds() throws Exception {
        creditor.addFunds(10);

        int refund = creditor.refund();

        assertEquals(10, refund);
    }

    @Test
    public void refundingResetsAvailableFundsToZero() throws Exception {
        creditor.addFunds(100);

        creditor.refund();

        assertEquals(0, creditor.getAvailableFunds());
    }

    @Test(expected = NotEnoughFundsException.class)
    public void deductingMoreMoneyThanFundsNotAllowed() throws Exception {
        creditor.addFunds(100);

        creditor.deduct(125);
    }
}