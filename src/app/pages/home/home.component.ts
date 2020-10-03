import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare let Swiper: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  myFunction() {
    const modalOpen = document.getElementById('containerModal');
    modalOpen.style.display = 'flex';
  }
  myFunctionClose() {
    const modalOpen = document.getElementById('containerModal');
    modalOpen.style.display = 'none';
  }
  ngAfterViewInit() {
    // var swiper = new Swiper('.swiper-container', {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    //   slidesPerGroup: 3,
    //   loop: true,
    //   loopFillGroupWithBlank: true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    // });
  }
}
