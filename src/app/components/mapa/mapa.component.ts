import { Component, OnInit } from '@angular/core';
import { Lugar } from 'src/app/interfaces/interfaces';

import * as mapboxgl from 'mapbox-gl';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  
  mapa: mapboxgl.Map;
  lugares: Lugar[] = [{
    id: '1',
    nombre: 'TSK Barracos',
    lng: -107.433329,
    lat: 24.767384,    
    color: '#FF0000'
  },
  {
    id: '2',
    nombre: 'TSK Orion',    
    lng: -107.449943, 
    lat: 24.759214,     
    color: '#FF0000'
  },
  {
    id: '3',
    nombre: 'TSK Abastos 1',    
    lng: -107.364676, 
    lat: 24.770888,
    color: '#FFFF00'
  },
  {
    id: '4',
    nombre: 'TSK Abastos 2',
    lng: -107.368112  , 
    lat: 24.770986,
    color: '#008000'
  },
  {
    id: '5',
    nombre: 'TSK Sanaloa',    
    lng: -107.364613, 
    lat: 24.801077,
    color: '#008000'
  },
  {
    id: '6',
    nombre: 'TSK Zapata',    
    lng: -107.409912, 
    lat: 24.793340,
    color: '#F44611'
  },
  {
    id: '7',
    nombre: 'TSK Zapata',    
    lng: -107.374693, 
    lat: 24.820586,
    color: '#008000'
  },
  {
    id: '8',
    nombre: 'TSK 6 de Enero',    
    lng: -107.394182, 
    lat: 24.843218,
    color: '#008000'
  },
  {
    id: '9',
    nombre: 'TSK Humaya',    
    lng: -107.411008, 
    lat: 24.830315,
    color: '#008000'
  },
  {
    id: '10',
    nombre: 'TSK La Conquista',    
    lng: -107.409912, 
    lat: 24.793340,
    color: '#008000'
  },
  {
    id: '11',
    nombre: 'TSK Navolato',    
    lng: -107.698123, 
    lat: 24.768302,
    color: '#FFFF00'
  }

  
];

  tsk: number ;

  public lineChartLabels: Label[] = ['Cultura', 'Gente', 'Operacion', 'Clientes', 'Desempeño', 'Normatividad', 'Licencias'];


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
    { data: [ 23, 19, 15, 15, 14, 7, 5], label: '85% TSK Humaya' },
    { data: [ 25, 20, 15, 15, 15, 10, 5], label: 'Objetivo' }
  ];

  public lineChartData6 =
  [    
    { data: [ 25, 20, 15, 15, 15, 10, 5], label: '100% TSK Humaya' },
    { data: [ 25, 20, 15, 15, 15, 10, 5], label: 'Objetivo' }
  ];  

  constructor() { 
    this.tsk = 0;
    //console.log('this.tsk: mapaComponent ', this.tsk)
  }

  asignarTSK( tsk: number)
  {
    this.tsk = tsk;
    //console.log( 'asignar tsk: ', this.tsk);
  }

  ngOnInit(): void {
    this.crearMapa();
  }

  crearMapa(){
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoicmFtb25zZTkiLCJhIjoiY2tjM2N3bzNnMDh0aTJycGFsYmdpMXNpbyJ9.LKhGL7sJwaRYYRkRJSzx8Q';
    
    this.mapa = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      //center: [ -75.75512993582937, 45.349977429009954 ],
      center: [ -107.433329,  24.767384 ],
      zoom: 10
    });

    for( const marcador of this.lugares){
      this.agregarMarcador( marcador );
    }

  }

  agregarMarcador(marcador: Lugar){

    //const html = `<h2>${marcador.nombre}</h2>
    //              <br>
    //              <button>Borrar</button>`;
    
    const h2 = document.createElement('h5');
    h2.innerText = marcador.nombre;

    const btnBorrar = document.createElement('button');
    btnBorrar.innerText = 'Borrar';

    const div = document.createElement('div');
    //div.append( h2, btnBorrar);
    div.append( h2 );

    const customPopup = new mapboxgl.Popup({
      offset: 25,
      closeOnClick: false
    }).setDOMContent( div );
    //.setHTML( html );    

    console.log( marcador );
    const marker = new mapboxgl.Marker({
      draggable: false,
      color: marcador.color    
    })
    .setLngLat([marcador.lng, marcador.lat])
    .setPopup( customPopup )
    .addTo( this.mapa );

    marker.on('drag', () =>{

      const lngLat = marker.getLngLat();
      console.log( lngLat );

      //ToDO: crear evento para emitir la coordenadas de este marcador
      //marker.remove();

    });

    //btnBorrar.addEventListener( 'click', ()=>{
    //  marker.remove();
    //TODO: Mostrar la grafica de la tienda
      //Eiminar el marcador mediante sockets
    //});
    
    //this.mapa.lat = 40;
    //this.mapa.lngLat =  [ -72.75512993582937, 43.349977429009954];

  }

  crearMarcador(){

    const customMarker: Lugar = {
      id: new Date().toISOString(),
      lng: -75.75512993582937, 
      lat: 45.349977429009954,
      nombre: 'Sin nombre',
      color: '#' + Math.floor(Math.random()*16777215).toString(16)       
    }


    //console.log( this.mapa );
    //this.mapa.lat = 40;
    //this.mapa.lngLat =  [ -72.75512993582937, 43.349977429009954];
    
    //this.mapa.setCenter =  [ -72.75512993582937, 43.349977429009954];
    //console.log( this.mapa.lngLat );
    this.agregarMarcador( customMarker );
  }

}


