import { Component } from '@angular/core'

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  titleName = 'Bredberg'
  isMobile = false;

  constructor(
  ) {
    if(window.innerWidth < window.innerHeight){
      this.isMobile = true;
    }
    console.log(this.isMobile)
  }
  ngOnInit(): void {
    if(window.innerWidth < window.innerHeight){
      this.isMobile = true;
    }
    console.log("is mobile:")
    console.log(this.isMobile)
  }
}
