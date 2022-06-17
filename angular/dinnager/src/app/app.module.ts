import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StartPageInfoComponent } from './start-page-info/start-page-info.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { StatsPageComponent } from './stats-page/stats-page.component';
import { StatisticDataBlockComponent } from './statistic-data-block/statistic-data-block.component';
import { StatisticDiogramBlockComponent } from './statistic-diogram-block/statistic-diogram-block.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    PageNotFoundComponent,
    StartPageInfoComponent,
    RegistrationFormComponent,
    SignInFormComponent,
    MainPageComponent,
    StatsPageComponent,
    StatisticDataBlockComponent,
    StatisticDiogramBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
