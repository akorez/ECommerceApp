import { CommonModule } from '@angular/common';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { routes } from './app/router';
import { ToastrModule } from 'ngx-toastr';
import {  NgxSpinnerModule } from 'ngx-spinner';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(BrowserModule, 
      CommonModule, 
      RouterModule.forRoot(routes), 
      ToastrModule.forRoot({
        closeButton:true,
        progressBar:true
      }),
      BrowserAnimationsModule,
      NgxSpinnerModule),
  ],
});
