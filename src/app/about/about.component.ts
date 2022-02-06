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
  welcomeMessage: string
  works: InfoField[]
  education: InfoField[]
  languages: InfoField[]
  starredProjects: any[] = []
  isMobile = false
  rowNum = 1
  programmingLanguages_columnNum = 5
  programmingLanguages: string[]
  gridlist_desired_rowHeight:string

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
    this.gridlist_desired_rowHeight = "30rem"
    if(window.innerWidth < window.innerHeight){
      this.isMobile = true
      this.rowNum = 2
      this.programmingLanguages_columnNum = 4
      this.gridlist_desired_rowHeight = "15rem"
    }
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['firstname']) //log the value of id
      this.firstName = params['firstname']
      this.whoAmI = this.getWhoAmI();
      this.profilePic = this.getProfilePics();
      this.education = this.aboutService.getEducation(this.firstName)
      this.works = this.aboutService.getWorks(this.firstName)
      this.languages = this.aboutService.getLanguages(this.firstName)
      this.programmingLanguages = this.aboutService.getProgrammingLanguages(this.firstName)
      this.welcomeMessage = this.getWelcomeMessage();
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
        return "I have a great interest in system design, software development and leadership. In addition to my technical interests i take every opportunity i get to engage myself in the non-profit student associations that Uppsala has to offer. \nMy long term goal is to work with challenging and rewarding problem solving at a place that offers good development opportunities with nice colleagues"
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
