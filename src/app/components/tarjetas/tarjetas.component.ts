import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  //tsk:number;

  @Output() cambioTsk = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  asignarTsk( tsk: number){
    this.cambioTsk.emit( tsk );
  }

}
