import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Holiday House';
  loadedFeature = 'house';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBQ1NbHs3nTkxdhrNMkyRGRuQdhZ-4pH4o",
      authDomain: "ng-http-5a99a.firebaseapp.com"
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;  
  }
}
