import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active: string = ''

  event$

  constructor(private location: Location) {
    this.event$ = location.onUrlChange((val) => {
      this.active = val
      console.log(this.active)
    })
    this.active = this.location.path()
  }

  activeBtn(item: string): string {
    if (this.active === item) {
      return 'active_nav'
    } else {
      return 'inactive_nav'
    }
  }

  ngOnInit(): void {
  }

}
