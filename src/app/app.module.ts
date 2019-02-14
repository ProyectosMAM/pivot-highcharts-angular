import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { WebDataRocksPivot } from "./webdatarocks/webdatarocks.angular4";
import { HighchartsChartComponent } from "highcharts-angular";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, WebDataRocksPivot, HighchartsChartComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
