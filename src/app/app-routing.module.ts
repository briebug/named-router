import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { ProductsComponent } from "./products/products.component";
import { Sidebar2Component } from "./sidebar2/sidebar2.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "",
    component: DashboardComponent,
    pathMatch: "full"
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "sidebar",
    component: SidebarComponent,
    outlet: "sidebar"
  },
  {
    path: "",
    component: SidebarComponent,
    outlet: "sidebar",
    pathMatch: "full"
  },
  {
    path: "sidebar2",
    component: Sidebar2Component,
    outlet: "sidebar"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
