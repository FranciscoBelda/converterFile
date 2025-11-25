import {Component, inject, OnInit, Signal} from '@angular/core';
import {ConverterService} from "../../services/converter.service";
import * as FileSaver from 'file-saver';
import {FormsModule} from "@angular/forms";
import {NgbProgressbarConfig, NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [
    FormsModule,
    NgbProgressbarModule,
  ],
  templateUrl: './converter.component.html'
})
export class ConverterComponent implements OnInit{
  private readonly converterService: ConverterService=inject(ConverterService);
  protected readonly page = this.converterService.page;
  private readonly configProgress: NgbProgressbarConfig =
    inject(NgbProgressbarConfig);
  movies: any[] = [];
  url: string = '';
  data: string = '';
  pages: number = 0;
  constructor() {
    this.configProgress.max = 500;
    this.configProgress.striped = true;
    this.configProgress.animated = true;
    this.configProgress.type = 'success';
    this.configProgress.height = '20px';
  }

  ngOnInit() {
  }

  protected convertToJson() {
    this.converterService.page.set(1);
    this.configProgress.max = this.pages;
    this.converterService.loadData(this.url, this.data, this.pages)
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
