import { Component, OnInit } from '@angular/core';
import { ConferenciaService } from '../conferencia.service';
import { Conferencia } from '../conferencia';

@Component({
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css']
})
export class ConferenciaListComponent implements OnInit {
  constructor(private conferenciaService: ConferenciaService) { } 
  conferencias: Conferencia[] = [];
  getConferencias(): void {
      this.conferenciaService.getConferencias().subscribe(conferencias => this.conferencias = conferencias);
  }
  ngOnInit() {
      this.getConferencias();
  }
}
