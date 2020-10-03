import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private parametros:ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("ya cargue we");
    this.recuperar();
  }
  recuperar(){
    let aux = this.parametros.params.subscribe(
      resp=>{
        console.log(resp)
      }
    );
    aux.unsubscribe();
    // const aux = this.parametros.params.toPromise().then(resp=>{
    //       console.log(resp)
    //     });
    // // console.log(aux);
  }
}
