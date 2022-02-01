import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from './contact.model'
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  
  private routeSub: Subscription;
  //private router: Router;
  contacts: Contact[]
  firstName: string
  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.route.parent.params.subscribe(params => console.log(params)); // Object {artistId: 12345}
    
  }

  ngOnInit(): void {
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

    switch(this.firstName){
      case "August": {
        this.contacts = this.contactsAugust
        break;
      }
      case "William": {
        console.log("gaga")
        this.contacts = this.contactsWilliam
        break;
      }
      case "Alyson": {
        this.contacts = this.contactsAlyson
        break;
      }
      case "Zacharias": {
        this.contacts = this.contactsZacharias
        break;
      }
      case "Nathanael": {
        this.contacts = this.contactsNathanael
        break;
      }
      default: {
        this.contacts = this.contactsAugust
      }
    }
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
  contactsAugust = [
    new Contact(
      '/august-bredberg',
      'https://www.linkedin.com/in/august-bredberg-1028b0209/',
      'linkedin',
      'linkedin',
    ),
    new Contact(
      'augustbredberg@gmail.com',
      'mailto:augustbredberg@gmail.com',
      'email',
      'envelope',
    ),
    new Contact('/augustbredberg', 'https://github.com/AugustBredberg', 'github', 'github'),
  ]
  contactsWilliam = [
    new Contact(
      '/william-bredberg',
      'https://www.linkedin.com/in/williambredberg/',
      'linkedin',
      'linkedin',
    ),
    new Contact(
      'william@bredberg.org',
      'mailto:william@bredberg.org',
      'email',
      'envelope',
    ),
    new Contact('/williambredberg', 'https://github.com/williambredberg', 'github', 'github'),
  ]
  contactsAlyson = [
    new Contact(
      '/august-bredberg',
      'https://www.linkedin.com/in/august-bredberg-1028b0209/',
      'linkedin',
      'linkedin',
    ),
    new Contact(
      'augustbredberg@gmail.com',
      'mailto:augustbredberg@gmail.com',
      'email',
      'envelope',
    ),
    new Contact('/augustbredberg', 'https://github.com/AugustBredberg', 'github', 'github'),
  ]
  contactsNathanael = [
    new Contact(
      '/august-bredberg',
      'https://www.linkedin.com/in/august-bredberg-1028b0209/',
      'linkedin',
      'linkedin',
    ),
    new Contact(
      'augustbredberg@gmail.com',
      'mailto:augustbredberg@gmail.com',
      'email',
      'envelope',
    ),
    new Contact('/augustbredberg', 'https://github.com/AugustBredberg', 'github', 'github'),
  ]
  contactsZacharias = [
    new Contact(
      '',
      '',
      '',
      '',
    ),
  ]
}
