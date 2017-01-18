import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Github {

	constructor(http) {
		this.http = http;
    this.username = 'eiffelqiu';
	}

	activate() {
    this.search();
	}

	search() {
    this.baseUrl = 'https://api.github.com/users/' + this.username;
    this.getRepos();
    this.getUser();
  }

  getUser() {
    return this.http.get(this.baseUrl).then(response => this.userInfo = response.content);
  }

	getRepos() {
    return this.http.get(this.baseUrl + '/repos').then(response => this.repos = response.content);
	}
}