import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
    ) {
      this.route.parent.params.subscribe(params => console.log(params)); // Object {artistId: 12345}
    }

  public ngOnInit() {
    this.projectsService.getApiProjects().subscribe(
      (res) => (this.githubProjects = res),
      (err) => console.warn('HTTP Error -' + err),
    )
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
  }
}
