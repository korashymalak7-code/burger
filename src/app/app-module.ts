import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { Navbar } from './component/navbar/navbar';
import { Header } from './component/header/header';
import { About } from './component/about/about';
import { Menu } from './component/menu/menu';
import { Booking } from './component/booking/booking';
import { Product } from './component/product/product';
import { Footer } from './component/footer/footer';

@NgModule({
  declarations: [App, Navbar, Header, About, Menu, Booking, Product, Footer],
  imports: [BrowserModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
