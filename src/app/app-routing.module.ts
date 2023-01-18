import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartComponent } from './chart/chart.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: '', component: SidebarComponent },
  { path: '', component: TopnavbarComponent },
  { path: '', component: ChartComponent },
  { path: 'transactions', component: TransactionsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


