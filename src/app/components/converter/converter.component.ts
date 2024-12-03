import {Component, inject, OnInit} from '@angular/core';
import {ConverterService} from "../../services/converter.service";
import * as FileSaver from 'file-saver';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent implements OnInit{
  private readonly converterService: ConverterService=inject(ConverterService);
  protected readonly

  movies: any[] = [];
  url: string = '';
  data: string = '';
  constructor() { }

  ngOnInit() {
  }

  protected convertToJson() {
    this.converterService.loadData(this.url, this.data)
      .subscribe(
      {
        next: value => {
          this.movies = value;
          this.saveMoviesToJson();
        },
        error: err => {
          console.error(err);
        }
      }
    )
  }

  private saveMoviesToJson() {
    const data = JSON.stringify(this.movies);
    const blob = new Blob([data],{type: 'application/json'});

    // Mostrar una notificación al usuario si el archivo no se descarga
    try {
      FileSaver.saveAs(blob, 'peliculas.json');
      console.log('Saved');
    } catch (error) {
      console.error('Error al guardar el archivo:', error);
      alert('No se pudo guardar el archivo. Por favor, verifica la configuración de tu navegador.');
    }
  }

}
