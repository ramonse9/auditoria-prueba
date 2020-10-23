import { Component, Input, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  @Input() tsk: number = 0;

  public lineChartLabels: Label[] = ['Cultura', 'Gente', 'Operacion', 'Clientes', 'Desempeño', 'Normatividad', 'Licencias'];
  
  //public lineChartData: ChartDataSets[] = [
    //{ data: [ 20, 10,  7,  8, 10, 4, 3], label: '60% TSK Orion' },
  //  { data: [ 25, 20, 15, 15, 15, 10, 5], label: '60% TSK Orion' },
  //  { data: [ 25, 20, 15, 15, 15, 10, 5], label: 'Objetivo' }
  //];



  //public lineChartData: ChartDataSets[] = [    
  //  { data: [ 25, 20, 15, 15, 15, 10, 5], label: '60% TSK Orion' },
  //  { data: [ 25, 20, 15, 15, 15, 10, 5], label: 'Objetivo' }    
  //];
  
  //tsk: number;
  //public lineChartLabels: Label[] = ['Cultura', 'Gente', 'Operacion', 'Clientes', 'Desempeño', 'Normatividad', 'Licencias'];

  public lineChartData1 =
  [    
    { data: [ 7, 6, 3, 5, 9, 3, 2], label: '60% TSK Orion' },
    { data: [ 25, 20, 15, 15, 15, 10, 5], label: 'Objetivo' }
  ];

  public lineChartData2 =
  [   
    { data: [ 10, 10, 8, 7, 9, 4, 3], label: '70% TSK Barrancos' },
    { data: [ 25, 20, 15, 15, 15, 10, 5], label: 'Objetivo' }
  ];

  public lineChartData3 =
  [   
    { data: [ 20, 17, 10, 5, 12, 7, 3], label: '80% TSK Navolato' },
    { data: [ 25, 20, 15, 15, 15, 10, 5], label: 'Objetivo' }
  ];

  public lineChartData4 =
  [    
    { data: [ 23, 19, 15, 11, 14, 7, 3], label: '83% TSK Abastos 1' },
    { data: [ 25, 20, 15, 15, 15, 10, 5], label: 'Objetivo' }
  ];

  public lineChartData5 =
  [    
    { data: [ 23, 19, 15, 15, 14, 7, 5], label: '85% TSK Zapata' },
    { data: [ 25, 20, 15, 15, 15, 10, 5], label: 'Objetivo' }
  ];

  public lineChartData6 =
  [    
    { data: [ 25, 20, 15, 15, 15, 10, 5], label: '100% TSK Humaya' },
    { data: [ 25, 20, 15, 15, 15, 10, 5], label: 'Objetivo' }
  ];  


  //public lineChartData: ChartDataSets[] = [    
  //];
  
  //public lineChartLabels: Label[] = [];
  


  

  constructor() { 
    console.log('tsk: graficaComponent ', this.tsk);   

  }

  ngOnInit(): void {
    console.log('ngOnInit: ', this.tsk);
  }

}
