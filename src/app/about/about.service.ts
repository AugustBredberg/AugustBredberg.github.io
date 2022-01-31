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

  educationWilliam: InfoField[] = [
    new InfoField(
      "Master's Programme in Environmental and Water Engineering",
      'Campus La Salle',
      'Oct. 2018 - July 2019',
      'https://www.salleurl.edu/ca/estudis/master-en-desenvolupament-avancat-de-videojocs',
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

  getEducation(firstName): InfoField[] {
    switch(firstName){
      case "August": {
        return this.educationAugust
      }
      case "William": {
        return this.educationWilliam
      }
      case "Alyson": {
        return this.educationAugust
      }
      case "Zacharias": {
        return this.educationAugust
      }
      default: {
        return this.educationAugust
      }
    }
  }

  getWorks(firstName): InfoField[] {
    switch(firstName){
      case "August": {
        return this.worksAugust
      }
      case "William": {
        return this.worksAugust
      }
      case "Alyson": {
        return this.worksAugust
      }
      case "Zacharias": {
        return this.worksAugust
      }
      default: {
        return this.worksAugust
      }
    }
  }

  getLanguages(firstName): InfoField[] {
    switch(firstName){
      case "August": {
        return this.languagesAugust
      }
      case "William": {
        return this.languagesAugust
      }
      case "Alyson": {
        return this.languagesAugust
      }
      case "Zacharias": {
        return this.languagesAugust
      }
      default: {
        return this.languagesAugust
      }
    }
  }
}
