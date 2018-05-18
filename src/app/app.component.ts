import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild  } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor( 
      private renderer : Renderer,
      private router: Router,
      @Inject(DOCUMENT,) 
      private document: any, 
      private element : ElementRef, 
      public location: Location
    ){}
  
  removeNavbar() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      if(titlee === 'login'){
          return false;
      }
      else {
          return true;
      }
  }

  removeFooter() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice( 1 );
    if(titlee === 'login'){
        return false;
    }
    else {
        return true;
    }
}
}
