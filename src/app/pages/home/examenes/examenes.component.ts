import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styleUrls: ['./examenes.component.scss'],
})
export class ExamenesComponent implements OnInit, AfterViewInit {
  mySwiper: Swiper;
  cursoSeleccionado: any;
  examenes = [
    {
      name: 'Multiplicacion',
      icon: '../../../../assets/multiplicar.svg',
      color: '#99ddc6',
      id: '0',
    },
    {
      name: 'Suma',
      icon: '../../../../assets/multiplicar.svg',
      color: '#00d372a6',
      id: '0',
    },
    {
      name: 'Fracciones',
      icon: '../../../../assets/multiplicar.svg',
      color: '#ea930ea6',
      id: '0',
    },
    {
      name: 'Division',
      icon: '../../../../assets/multiplicar.svg',
      color: '#19e416a6',
      id: '0',
    },
    {
      name: 'Resta',
      icon: '../../../../assets/multiplicar.svg',
      color: '#e416dea6',
      id: '0',
    },
    {
      name: 'Cultura general',
      icon: '../../../../assets/multiplicar.svg',
      color: '#ea930ea6',
      id: '1',
    },
    {
      name: 'Prehistoria',
      icon: '../../../../assets/multiplicar.svg',
      color: '#19e416a6',
      id: '1',
    },
    {
      name: 'Dictaduras',
      icon: '../../../../assets/multiplicar.svg',
      color: '#e416dea6',
      id: '1',
    },
  ];
  examenesSeleccionados = [];
  constructor(private activeroute: ActivatedRoute, private router: Router) {}
  obtenerExamen() {
    this.examenesSeleccionados = this.examenes.filter((e) => {
      if (e.id === this.cursoSeleccionado.id) {
        return true;
      }
    });
    console.log(this.examenesSeleccionados);
  }
  goExamen(item: any) {
    console.log('entre a register we');
    this.router.navigate(['/components/pregunta', { curso: JSON.stringify(item) }]);
    // this.router.navigate(["/auth/register", { id: 'Hola muda :v' }]);
  }
  obtenerParams() {
    const aux: any = this.activeroute.snapshot.params.curso;
    const auxJson = JSON.parse(aux);
    // console.log('aqui estoy', aux);
    // console.log('aqui estoy', auxJson);
    this.cursoSeleccionado = auxJson;
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
  ngOnInit(): void {
    this.obtenerParams();
    this.obtenerExamen();
  }
}
