import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Github {

	constructor(http) {
		this.http = http;
    this.username = 'eiffelqiu';
    this.userInfo = {};
    this.baseUrl = 'https://api.github.com/users/' + this.username ;
	}

	activate() {
    this.search();
	}

	search() {
    this.getRepos();
    this.getUser();
  }

  getUser() {
    return Promise.all(this.http.get(this.baseUrl).then(response => this.userInfo = response.content));
  }

	getRepos() {
    return Promise.all(this.http.get(this.baseUrl + '/repos?per_page=100&page=').then(response => this.repos = response.content));
	}
}
