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
  columnNum = 3
  firstName: string
  tabOption = 0
  isMobile = false

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
      this.columnNum = 2
    }
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['firstname']) //log the value of id
      this.firstName = params['firstname']
    })


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

}
