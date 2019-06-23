import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, 
         MatFormFieldModule, 
         MatButtonModule, 
         MatSidenavModule, 
         MatIconModule, 
         MatListModule, 
         MatGridListModule, 
         MatCardModule, 
         MatInputModule,
         MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { SentimentalComponent } from './sentimental/sentimental.component';
@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    DashboardComponent,
    SentimentalComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
