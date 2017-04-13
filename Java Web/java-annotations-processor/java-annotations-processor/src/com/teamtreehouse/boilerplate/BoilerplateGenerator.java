package com.teamtreehouse.boilerplate;

import javax.annotation.processing.AbstractProcessor;
import javax.annotation.processing.RoundEnvironment;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import javax.lang.model.element.Element;
import javax.lang.model.element.TypeElement;
import javax.lang.model.element.VariableElement;
import javax.lang.model.util.ElementFilter;
import javax.tools.JavaFileObject;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@SupportedAnnotationTypes("com.teamtreehouse.boilerplate.Property")
@SupportedSourceVersion(SourceVersion.RELEASE_8)
public class BoilerplateGenerator extends AbstractProcessor{
    @Override
    public boolean process(Set<? extends TypeElement> annotations, RoundEnvironment env) {
        for(TypeElement t : annotations) {
            String qualifiedStubClassName = null;
            List<BoilerplateField> bpFields = new ArrayList<BoilerplateField>();

            Set<? extends Element> elements = env.getElementsAnnotatedWith(Property.class);
            Set<VariableElement> fields = ElementFilter.fieldsIn(elements);

            // Iterate over the annotated elements (e.g. fields)
            for(VariableElement field : fields) {
                String fieldName = field.getSimpleName().toString();
                String fieldClassName = field.asType().toString();
                Property property = field.getAnnotation(Property.class);

                BoilerplateField bpField = new BoilerplateField(fieldName,fieldClassName, property.prefix(), property.setter());
                bpFields.add(bpField);

                if(qualifiedStubClassName == null) {
                    qualifiedStubClassName = ((TypeElement)field.getEnclosingElement()).getQualifiedName().toString();
                }
            }

            // Try to write the source file
            try {
                if(qualifiedStubClassName != null) {
                    writeSourceFile(qualifiedStubClassName,bpFields);
                }
            } catch (IOException e) {
                System.err.printf("Unable to create source file from '%s'%n",qualifiedStubClassName);
            }
        }
        return true;
    }

    private void writeSourceFile(String qualifiedStubClassName, List<BoilerplateField> bpFields) throws IOException {
        int index = qualifiedStubClassName.lastIndexOf(".");
        String generatedPackageName = qualifiedStubClassName.substring(0, index);
        String generatedClassName = qualifiedStubClassName.substring(index + 1, qualifiedStubClassName.length() - 4);

        // Prepend with 'src.' so that it ends up in the same source folder as the annotated (stub) class
        String qualifiedGeneratedClassName = "src." + generatedPackageName + "." + generatedClassName;

        // Create the file
        JavaFileObject sourceFile = processingEnv.getFiler().createSourceFile(qualifiedGeneratedClassName);
        PrintWriter out = new PrintWriter(sourceFile.openWriter());

        // Declare the package
        if(index > 0) {
            out.write(String.format("package %s;%n%n", generatedPackageName));
        }

        // Write imports for any classes whose package name does not begin with
        // (1) java.lang, or
        // (2) the generated package name
        Set<String> imports = new HashSet<String>();
        for(BoilerplateField bpField : bpFields) {
            String type = bpField.getType();
            if(type.indexOf(".") > 0 && !type.startsWith("java.lang.") && !type.startsWith(generatedPackageName)) {
                imports.add(type);
            }
        }
        for(String imp : imports) {
            out.printf("import %s;%n", imp);
        }

        // Declare the class
        out.write(String.format("%npublic class %s {%n", generatedClassName));

        // Write all fields
        for(BoilerplateField bpField : bpFields) {
            out.printf("%s%n",bpField.getFieldDeclaration());
        }

        // Write getters & setters
        for(BoilerplateField bpField : bpFields) {
            // Write getter
            out.printf("%n%s",bpField.getGetterDeclaration());

            // Write setter
            out.printf("%n%s",bpField.getSetterDeclaration());
        }

        // Close the class
        out.printf("%n}");

        // Close the PrintWriter
        out.close();

        System.out.printf("Successfully created '%s.java'%n",generatedClassName);
    }
}