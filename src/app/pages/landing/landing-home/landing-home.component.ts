import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.component.html',
  styleUrls: ['./landing-home.component.scss']
})
export class LandingHomeComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  goRegister() {
    console.log('entre a register we');
    this.router.navigate(["/home"]);
    // this.router.navigate(["/auth/register", { id: 'Hola muda :v' }]);
  }
  goLogin() {
    console.log('entre a login we');
    this.router.navigate(["/home"]);
  }
}
