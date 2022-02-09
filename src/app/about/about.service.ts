import { InfoField } from './infoField.model'
import { Injectable } from '@angular/core'

@Injectable()
export class AboutService {
  worksAugust: InfoField[] = [
    new InfoField(
      'Software Developer',
      'Säljpoolen i Sverige AB',
      'May 2021 -',
      'https://www.saljpoolen.se/sv',
    ),
  ]
  worksWilliam: InfoField[] = [
    new InfoField(
      '',
      '',
      '',
      '',
    ),
  ]

  educationWilliam: InfoField[] = [
    new InfoField(
      "Master's Programme in Environmental and Water Engineering",
      'Campus La Salle',
      'Oct. 2018 - July 2019',
      'https://www.salleurl.edu/ca/estudis/master-en-desenvolupament-avancat-de-videojocs',
    ),
  ]
  educationAlyson: InfoField[] = [
    new InfoField(
      "Bachelor of Science Program, Chemistry",
      'Lunds Tekniska Högskola',
      'Aug 2021 -',
      '',
    ),
  ]
  educationAugust: InfoField[] = [
    new InfoField(
      "Master's Programme in Computer and Information Engineering",
      'Uppsala University',
      'August. 2018 - ',
      'https://www.uu.se/utbildning/utbildningar/selma/program/?pKod=TIT2Y',
    ),
    new InfoField(
      'Handling of medicinal product',
      'Capio Simrishamn',
      'Sept. 2016',
      'https://capio.se/hitta-mottagning/specialistvard/internmedicin/narsjukhus-simrishamn/',
    ),
  ]

  languagesAugust: InfoField[] = [
    new InfoField('Swedish', 'Bilingual or native competence', ' ', ' '),
    new InfoField('English', 'Bilingual or native competence', ' ', ' '),
  ]
  languagesWilliam: InfoField[] = [
    new InfoField('', '', ' ', ' '),
  ]

  getEducation(firstName): InfoField[] {
    switch(firstName){
      case "August": {
        return this.educationAugust
      }
      case "William": {
        return this.educationWilliam
      }
      case "Alyson": {
        return this.educationAlyson
      }
      case "Zacharias": {
        return this.educationWilliam
      }
      default: {
        return this.educationWilliam
      }
    }
  }

  getWorks(firstName): InfoField[] {
    switch(firstName){
      case "August": {
        return this.worksAugust
      }
      case "William": {
        return this.worksWilliam
      }
      case "Alyson": {
        return this.worksWilliam
      }
      case "Zacharias": {
        return this.worksWilliam
      }
      default: {
        return this.worksWilliam
      }
    }
  }

  getLanguages(firstName): InfoField[] {
    switch(firstName){
      case "August": {
        return this.languagesAugust
      }
      case "William": {
        return this.languagesWilliam
      }
      case "Alyson": {
        return this.languagesWilliam
      }
      case "Zacharias": {
        return this.languagesWilliam
      }
      default: {
        return this.languagesWilliam
      }
    }
  }

  getProgrammingLanguages(firstName): string[]{
    switch(firstName){
      case "August": {
        return ["Java", "SQL", "JavaScript", "TypeScript", "ASP. NET", "C#", "Angular", "HTML/CSS", "Python", "Flutter", "Dart", "C++", "C", "Haskell", "GitHub", "GitLab", "Scrum", "Kanban", "CI/CD", "Matlab, REST API"]
      }
      case "William": {
        return []
      }
      case "Alyson": {
        return []
      }
      case "Zacharias": {
        return []
      }
      default: {
        return []
      }
    }
  }
}
