import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Output() cambioTsk = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  asignarTsk( tsk: number ){
    //console.log('asignarTsk: ', tsk);
    this.cambioTsk.emit( tsk );    
  }

}
