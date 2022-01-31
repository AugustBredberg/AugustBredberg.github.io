import { Component, OnInit } from '@angular/core'
import { InfoField } from './infoField.model'
import { AboutService } from './about.service'
import { ProjectsService } from '../projects/projects.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpUrlEncodingCodec } from '@angular/common/http';

@Component({
  templateUrl: './about.component.html',
  providers: [AboutService, ProjectsService],
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  
  private routeSub: Subscription;
  private aboutService: AboutService;
  firstName: string
  works: InfoField[]
  education: InfoField[]
  languages: InfoField[]
  starredProjects: any[] = []
  
  whoAmI: String
  profilePic: String
  spokenLanguages: [String]

  constructor(
    aboutService: AboutService,
    private projectsService: ProjectsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.aboutService = aboutService
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['firstname']) //log the value of id
      this.firstName = params['firstname']
      this.whoAmI = this.getWhoAmI();
      this.profilePic = this.getProfilePics();
      this.education = this.aboutService.getEducation(this.firstName)
      this.works = this.aboutService.getWorks(this.firstName)
      this.languages = this.aboutService.getLanguages(this.firstName)

      // Checks if the URL ends with 'August' || 'William' || 'Alyson'
      // if it doesn't, navigate to home
      var urlEnding = this.router.url.split('/').pop();
      if(urlEnding != 'August' && 
         urlEnding != 'William'&& 
         urlEnding != 'Alyson'){
        this.router.navigate(['/']);
      }
    });
    this.projectsService.getStarredProjects().subscribe(
      (response) => {
        response.forEach((element, index) => {
          this.projectsService.getRepoInfo(element.repo).subscribe((data) => {
            this.starredProjects[index] = data
          })
        })
      },
      (error) => console.warn('Could not load projectsService', error),
      () => {},
    )
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getWhoAmI(): String {
    console.log("Testar printa")
    console.log(this.firstName)
    switch(this.firstName){
      case "August": {
        return "I'm doing my master in software engineering at Uppsala university, whilst working part time as a software developer for Säljpoolen AB. \n\nI have a great interest in system design, software development and leadership. In addition to my technical interests i take every opportunity i get to engage myself in the non-profit student associations that Uppsala has to offer. \nMy long term goal is to work with challenging and rewarding problem solving at a place that offers good development opportunities with nice colleagues"
      }
      case "William": {
        return "About William"
      }
      case "Alyson": {
        return "About Alyson"
      }
      case "Zacharias": {
        return "About Zacharias"
      }
      default: {
        return "No person selected"
      }
    }
  }

  getProfilePics(): String {
    switch(this.firstName){
      case "August": {
        return "assets/august_bredberg_profile.jpg"
      }
      case "William": {
        return "assets/william_bredberg_profile.jfif"
      }
      case "Alyson": {
        return "assets/alyson_bredberg_profile2.jpg"
      }
      case "Zacharias": {
        return "assets/zacharias_bredberg_profile.jpg"
      }
      default: {
        return "assets/nathanael_bredberg_profile.png"
      }
    }
  }


}
