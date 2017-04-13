package com.teamtreehouse.sample;

import com.teamtreehouse.boilerplate.Property;

import java.util.Date;

public class PersonStub {
    @Property String firstName;
    @Property String lastName;

    @Property(setter = false)
    Long ssn;

    @Property Date dob;

    @Property(prefix = "can")
    boolean codeInJava;
}