package com.teamtreehouse.boilerplate;

public class BoilerplateField {
    private String fieldName;
    private String type;
    private String getterPrefix;
    private boolean setterIncluded;

    private static final String PREFIX_DEFAULT = "get";

    public BoilerplateField(String fieldName, String type, String getterPrefix, boolean setterIncluded) {
        this.fieldName = fieldName;
        this.type = type;
        this.getterPrefix = getterPrefix.isEmpty() ? PREFIX_DEFAULT : getterPrefix;
        this.setterIncluded = setterIncluded;
    }

    public String getFieldDeclaration() {
        return String.format("\tpublic %s %s;",getSimpleType(),fieldName);
    }

    public String getGetterDeclaration() {
        String getter = String.format("\tpublic %s %s%s() {%n",getSimpleType(),getterPrefix,getCapitalizedFieldName());
        getter += String.format("\t\treturn %s;%n",fieldName);
        getter += "\t}";
        return getter;
    }

    public String getSetterDeclaration() {
        if(setterIncluded) {
            String setter = String.format("\tpublic void set%s(%s %s) {%n",getCapitalizedFieldName(),getSimpleType(),fieldName);
            setter += String.format("\t\tthis.%s = %s;%n",fieldName,fieldName);
            setter += "\t}";
            return setter;
        } else {
            return "";
        }

    }

    public String getType() {
        return type;
    }

    private String getCapitalizedFieldName() {
        return fieldName.substring(0,1).toUpperCase() + fieldName.substring(1);
    }

    public String getSimpleType() {
        int index = type.lastIndexOf(".");
        return index > 0 ? type.substring(index + 1) : type;
    }
}
