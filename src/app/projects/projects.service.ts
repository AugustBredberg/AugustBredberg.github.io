import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable'

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  username = ''

  constructor(private http: HttpClient) {}

  getApiProjects(): Observable<any[]> {
    const getProjectsUrl =
      'https://api.github.com/users/augustbredberg/repos?sort=pushed'
    return this.http.get<any[]>(getProjectsUrl)
  }

  getRepoInfo(name: string): Observable<any[]> {
    const getRepoUrl = '' + name
    return new Observable //this.http.get<any[]>(getRepoUrl)

    //const getRepoUrl = 'https://api.github.com/repos/daliife/' + name
    return this.http.get<any[]>(getRepoUrl)
  }

  getStarredProjects(): Observable<any[]> {
    /*
    const getStarredUrl = 'https://gh-pinned-repos.now.sh/?username=augustbredberg'
    console.log("getStarredUrl")
    console.log(getStarredUrl)
    return this.http.get<any[]>(getStarredUrl)
    */
    //const getStarredUrl = ''
    return new Observable //this.http.get<any[]>(getStarredUrl)
  }
}
