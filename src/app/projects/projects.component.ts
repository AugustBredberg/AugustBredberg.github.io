import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProjectsService } from './projects.service'

@Component({
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectsService],
})
export class ProjectsComponent implements OnInit {
  
  
  private routeSub: Subscription;
  tabOption = 0
  firstName: string;
  githubProjects: any[] = []

  constructor(
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
    ) {
      this.route.parent.params.subscribe(params => console.log(params)); // Object {artistId: 12345}
    }

  public ngOnInit() {
    
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['firstname']) //log the value of id
      this.firstName = params['firstname']

      // Checks if the URL ends with 'August' || 'William' || 'Alyson'
      // if it doesn't, navigate to home
      var urlEnding = this.router.url.split('/').pop();
      console.log(urlEnding)
      if(urlEnding != 'August' && 
         urlEnding != 'William'&& 
         urlEnding != 'Alyson'){
        this.router.navigate(['/']);
      }
    });
    
    var getProjectsUrl = 'https://api.github.com/users/augustbredberg/repos?sort=pushed';
    switch(this.firstName){
      case "August": {
        getProjectsUrl = 'https://api.github.com/users/augustbredberg/repos?sort=pushed';
      }
      case "William": {
        getProjectsUrl = 'https://api.github.com/users/todo';
      }
      case "Alyson": {
        getProjectsUrl = 'https://api.github.com/users/todo';
      }
      case "Zacharias": {
        getProjectsUrl = 'https://api.github.com/users/todo';
      }
      default: {
        getProjectsUrl = 'https://api.github.com/users/todo';
      }
    }
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
  currentPersonsGitProjects(){
    var getProjectsUrl = 'https://api.github.com/users/augustbredberg/repos?sort=pushed';
    switch(this.firstName){
      case "August": {
        getProjectsUrl = 'https://api.github.com/users/augustbredberg/repos?sort=pushed';
      }
      case "William": {
        getProjectsUrl = 'https://api.github.com/users/todo';
      }
      case "Alyson": {
        getProjectsUrl = 'https://api.github.com/users/todo';
      }
      case "Zacharias": {
        getProjectsUrl = 'https://api.github.com/users/todo';
      }
      default: {
        getProjectsUrl = 'https://api.github.com/users/todo';
      }
    }
  }
}
