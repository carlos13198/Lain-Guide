import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;
  hero: String = 'Erick';
  mao: String;
  lolicon: String;
  show: boolean = true;
  cursos = [
    {
      name: 'Matematicas',
      icon: '../../../../assets/multiplicar.svg',
      color: '#2553d4',
      id: '0',
    },
    {
      name: 'Cultura General',
      icon: '../../../../assets/multiplicar.svg',
      color: '#00d372a6',
      id: '1',
    },
    {
      name: 'Comunicacion',
      icon: '../../../../assets/multiplicar.svg',
      color: '#ea930ea6',
      id: '2',
    },
    // {
    //   name: 'Conta',
    //   icon: '../../../../assets/multiplicar.svg',
    //   color: '#19e416a6',
    //   id: '3',
    // },
    // {
    //   name: 'Economia',
    //   icon: '../../../../assets/multiplicar.svg',
    //   color: '#e416dea6',
    //   id: '4',
    // },
  ];
  constructor(private router: Router) {}
  salvar() {
    console.log(this.hero);
    if(this.show){
      this.show=false;
    }else{
      this.show=true;
    }
  }
  ngOnInit(): void {
    console.log(this.cursos);
    // console.log(this.cursos[1]);
  }
  goCurso(item: any) {
    console.log('entre a register we');
    this.router.navigate(['/home/examenes', { curso: JSON.stringify(item) }]);
    // this.router.navigate(["/auth/register", { id: 'Hola muda :v' }]);
  }
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // when window width is >= 640px
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  }
}
