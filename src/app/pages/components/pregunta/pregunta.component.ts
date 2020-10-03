import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCheckCircle,
  faHome,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.scss'],
})
export class PreguntaComponent implements OnInit {
  update: number = 0;
  miresp: number;
  final: boolean = false;
  faHome = faHome;
  faTimesCircle = faTimesCircle;
  faCheckCircle = faCheckCircle;
  preguntas = [
    // {
    //   m1: 5,
    //   m2: 6,
    //   resp: 30,
    // },
    // {
    //   m1: 8,
    //   m2: 7,
    //   resp: 56,
    // },
    // {
    //   m1: 10,
    //   m2: 12,
    //   resp: 120,
    // },
    // {
    //   m1: 3,
    //   m2: 6,
    //   resp: 18,
    // },
  ];
  respuestas = [];
  constructor(library: FaIconLibrary, private router: Router) {
    library.addIcons(faHome, faTimesCircle, faCheckCircle);
  }

  ngOnInit(): void {
    console.log(this.preguntas);
    this.setPreguntas();
    // for (let index = 0; index < 10; index++) {
    //   console.log(this.getRandomNumberBetween());
    // }
  }
  getRandomNumber() {
    const min = 1;
    const max = 12;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  myFunction() {
    const modalOpen = document.getElementById('containerModal');
    modalOpen.style.display = 'flex';
  }
  next() {
    if (this.update < this.preguntas.length && this.final === false) {
      const aux = {
        value: this.miresp,
        estado: null,
      };
      this.respuestas.push(aux);
      this.miresp = null;
      if (this.update === this.preguntas.length - 1) {
        this.match();
        this.final = true;
      } else {
        this.update = this.update + 1;
      }

      console.log(this.respuestas);
    }
    if (this.final) {
      this.myFunction();
    }
  }
  setPreguntas() {
    for (let index = 0; index < 20; index++) {
      let norepeat = true;
      let aux;
      do {
        let m1 = this.getRandomNumber();
        let m2 = this.getRandomNumber();
        let resp = m1 * m2;
        let aux1 = {
          m1: m1,
          m2: m2,
          resp: resp,
        };
        norepeat = this.noRepeat(aux1);
        aux = aux1;
      } while (norepeat === false);
      this.preguntas.push(aux);
    }
    console.log(this.preguntas);
  }
  goHome() {
    this.router.navigate(['/home']);
  }
  noRepeat(aux: any) {
    const aux1 = aux;
    const repeat = true;
    for (let index = 0; index < this.preguntas.length; index++) {
      if (aux1.resp === this.preguntas[index].resp) {
        if (aux1.m1 === this.preguntas[index].m1) {
          if (aux1.m2 === this.preguntas[index].m2) {
            return false;
          }
        }
        // else if (aux1.m1 === this.preguntas[index].m2) {
        //   if (aux1.m2 === this.preguntas[index].m1) {
        //     return false;
        //   }
        // }
      }
    }
    return repeat;
  }
  match() {
    for (let index = 0; index < this.preguntas.length; index++) {
      if (this.preguntas[index].resp === this.respuestas[index].value) {
        this.respuestas[index].estado = true;
      } else {
        this.respuestas[index].estado = false;
      }
    }
    // console.log(this.respuestas);
  }
}
