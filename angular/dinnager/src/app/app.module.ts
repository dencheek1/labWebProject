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
import { HistoryService } from 'src/services/HistoryService';
import { StatisticsMicroBlockComponent } from './statistics-micro-block/statistics-micro-block.component';
import { DieryPageComponent } from './diery-page/diery-page.component';
import { DierySearchBlockComponent } from './diery-search-block/diery-search-block.component';
import { DieryTableBlockComponent } from './diery-table-block/diery-table-block.component';
import { DierySelectFoodBlockComponent } from './diery-select-food-block/diery-select-food-block.component';
import { FoodItemService } from 'src/services/FoodItemService';

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
    StatisticDiogramBlockComponent,
    StatisticsMicroBlockComponent,
    DieryPageComponent,
    DierySearchBlockComponent,
    DieryTableBlockComponent,
    DierySelectFoodBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HistoryService,FoodItemService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
