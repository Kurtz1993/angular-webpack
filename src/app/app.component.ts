import { Component } from "@angular/core";
import "../assets/styles/styles.scss";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent {
    public environment: string;

    constructor() {
        this.environment = process.env.ENV;
    }
}
