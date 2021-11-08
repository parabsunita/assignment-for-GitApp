import { Component } from '@angular/core';
 
import { GithubService } from './github.service';
import { repo } from './repo.model';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title="";
  userName: string = ""
  repo:any;
 
  loading: boolean = false;
  errorMessage:any;
 
  constructor(private githubService: GithubService) {
  }
 //function for get git user details
  public getRepos() {
    this.loading = true;
    this.errorMessage = " ";
    this.githubService.getRepos(this.userName)
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.repo = response; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = "ErrorMessage";
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }
}
 
