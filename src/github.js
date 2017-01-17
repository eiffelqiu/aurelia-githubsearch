import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Github {
	constructor(http) {
		this.http = http;
    this.user = 'eiffelqiu';
    this.userInfo = {};
	}

	activate() {
    this.searchAll();
	}

	searchAll() {
    this.searchRepos();
    this.searchUser();
  }

  searchUser() {
    let uri = 'https://api.github.com/users/' + this.user ;
    let results = {};

    return Promise.all([
      this.http.get(uri).then(response => this.userInfo = response.content)
  ]);
  }

	searchRepos() {
    let uri = 'https://api.github.com/users/' + this.user + '/repos?per_page=10&page=';
    let results = [];

    return Promise.all([
      this.http.get(uri+'0').then(response => results[0] = response.content),
      this.http.get(uri+'1').then(response => results[1] = response.content),
    this.http.get(uri+'2').then(response => results[2] = response.content)
  ]).then(() => {
      this.repos = results[0].concat(results[1], results[2]);
  });
	}
}
