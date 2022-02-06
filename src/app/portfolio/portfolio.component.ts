import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  columnNumHeader = 2
  columnNum = 3
  firstName: string
  tabOption = 0
  isMobile = false
  aboutUnwatchdColumns = 1
  welcomeMessage: string

  private routeSub: Subscription;
  githubProjects: any[] = []
  tiles: Tile[] = [
    {text: 'assets/portfolioAugust/logoRED.png', cols: 3, rows: 1, color: 'lightblue', },
    {text: 'assets/portfolioAugust/movieView.jpg', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { 
    
  }

  ngOnInit(): void {
    // If mobile, use 1 column
    if(window.innerWidth < window.innerHeight){
      this.columnNumHeader = 1
      this.columnNum = 2
      this.isMobile = true
      this.aboutUnwatchdColumns = 2
    }
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['firstname']) //log the value of id
      this.firstName = params['firstname']
    })

    this.welcomeMessage = this.getWelcomeMessage();

    this.getApiProjects().subscribe(
      (res) => (this.githubProjects = res),
      (err) => console.warn('HTTP Error -' + err),
    )
  }

  getApiProjects(): Observable<any[]> {
    var getProjectsUrl =
      'https://api.github.com/users/augustbredberg/repos?sort=pushed'
      console.log("firstname is:" + this.firstName)
      
      switch(this.firstName){
        case "August": {
          console.log("gaga")
          return this.http.get<any[]>('https://api.github.com/users/augustbredberg/repos?sort=pushed')
        }
        case "William": {
          return this.http.get<any[]>('https://api.github.com/users//repos?sort=pushed')
        }
        case "Alyson": {
          return this.http.get<any[]>('https://api.github.com/users//repos?sort=pushed')
        }
        case "Zacharias": {
          return this.http.get<any[]>('https://api.github.com/users//repos?sort=pushed')
        }
        default: {
          return this.http.get<any[]>('https://api.github.com/users//repos?sort=pushed')
        }
      }
      
  }

  getWelcomeMessage(): string {
    var now: Date = new Date();
    var thisHour = now.getHours();
    // 04 - 09:00 -- Good morning! Happy to see someone here this early!
    // 09:00 - 11:30 -- Good Morning!
    // 11:30 - 13:00 -- Hello there, good day!
    // 13:00 - 17:00 -- Good afternoon, hope you've had a good day thus far!
    // 17:00 - 22:00 -- Good evening, have you had a good day?
    // 22:00 - 04:00 -- Fun to see someone here this late! Welcome!
    switch(true){
      case 4 <= thisHour && thisHour < 9 : {
        return "Good morning! Happy to see someone here this early!"
      }
      case 9 <= thisHour && thisHour < 11: {
        return "Good Morning!"
      }
      case 11 <= thisHour && thisHour < 13: {
        return "Hello there!"
      }
      case 13 <= thisHour && thisHour < 17: {
        return "Good afternoon, hope you've had a good day thus far!"
      }
      case 17 <= thisHour && thisHour < 22: {
        return "Good evening, have you had a good day?"
      }
      case 22 <= thisHour || thisHour < 4: {
        return "Fun to see someone here this late! Welcome!"
      }
      default: {
        return "Hello there! Welcome!"
      }
    }
  }

}
