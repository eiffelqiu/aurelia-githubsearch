import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Github {

  let baseUrl = 'https://api.github.com/users/' + this.username ;

	constructor(http) {
		this.http = http;
    this.username = 'eiffelqiu';
    this.userInfo = {};
	}

	activate() {
    this.search();
	}

	search() {
    this.getRepos();
    this.getUser();
  }

  getUser() {
    return Promise.all(this.http.get(baseUrl).then(response => this.userInfo = response.content));
  }

	getRepos() {
    return Promise.all(this.http.get(baseUrl + '/repos?per_page=100&page=').then(response => this.repos = response.content));
	}
}
