import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './transaction-history/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    DashboardComponent,
    TransactionsComponent,
    TransactionHistoryComponent,
    SidebarComponent,
    TopnavbarComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }