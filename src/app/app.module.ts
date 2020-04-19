import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AboutComponent } from './source-led/about/about.component';
import { ServiceComponent } from './source-led/service/service.component';
import { ContactComponent } from './source-led/contact/contact.component';
import { ProductsComponent } from './source-led/products/products.component';
import { PricingComponent } from './source-led/pricing/pricing.component';
import { HomeComponent } from './source-led/home/home.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { LayoutComponent } from './common/layout/layout.component';
import { SubLayoutComponent } from './common/layout/sub-layout/sub-layout.component';
import { GnwComplianceCheckerRulesModule } from 'gnw-compliance-checker-rules';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api-interceptor';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent, pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: SubLayoutComponent,
    children: [
      { path: 'about', component: AboutComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactComponent, pathMatch: 'full' },
      { path: 'product', component: ProductsComponent, pathMatch: 'full' },
      { path: 'services', component: ServiceComponent, pathMatch: 'full' }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ProductsComponent,
    PricingComponent,
    HomeComponent,
    NavigationComponent,
    SubLayoutComponent
  ],
  imports: [
    BrowserModule,
    GnwComplianceCheckerRulesModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
