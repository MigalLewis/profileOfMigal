import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule, ScreenTrackingService,UserTrackingService } from '@angular/fire/compat/analytics';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HomePageModule } from './pages/navigating/home-page/home-page.module';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomePageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    provideFirestore(() => getFirestore())
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
