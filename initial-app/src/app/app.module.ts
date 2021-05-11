import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { TestServiceService } from './services/test-service.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, BuyComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],

  providers: [TestServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
