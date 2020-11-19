import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HelloDirective, HelloComponent } from "./hello";

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HelloDirective,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
