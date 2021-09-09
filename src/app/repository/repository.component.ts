import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  constructor() { }

  repoLink: string = "https://github.com/noconsulate"

  openRepo(): void {
    window.open(this.repoLink, "_blank")
  }

  ngOnInit(): void {
  }

}
