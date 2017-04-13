package sample;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception{
        //The line below will load an FXML file
        Parent root = FXMLLoader.load(getClass().getResource("/fxml/sample.fxml"));
        /*
        Group root = new Group();
        Text txt = new Text("Sup?");
        //Param after font name is font size
        txt.setFont(new Font("Papyrus", 80));
        Label label = new Label("Name:");
        TextField nameFld = new TextField();
        GridPane grid = new GridPane();
        //The zero params are on column and row respectively (starts at 0)
        grid.add(label,0,0);
        grid.add(nameFld, 1, 0);
        //setHgap is akin to padding
        grid.setHgap(20);
        Button btn = new Button();
        grid.add(btn, 1, 1);
        //Below is a debugging feature to see grid lines.
        //grid.setGridLinesVisible(true);
        btn.setText("Say Sup!");
        //Does something on event, takes in lambda function for what to do
        btn.setOnAction(evt -> System.out.printf("Sup %s!%n",
                nameFld.getText()));
        //Moves txt down 50 pixels
        txt.setY(50);
        VBox box = new VBox();
        box.getChildren().addAll(txt, grid);
        //Shiz needs to be added to the root to show up. Only parent items though.
        root.getChildren().add(box);
        //Windows name = setTitle
        */
        primaryStage.setTitle("Sup");
        primaryStage.setScene(new Scene(root, 300, 275));
        primaryStage.show();
    }


    public static void main(String[] args) {
        launch(args);
    }
}
