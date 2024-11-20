import { Component, Input, input, OnInit } from '@angular/core';
import { ConferenciaService } from '../conferencia.service';
import { ActivatedRoute } from '@angular/router';
import { ConferenciaDetail } from '../conferencia-detail';

@Component({
  selector: 'app-conferencia-detail',
  templateUrl: './conferencia-detail.component.html',
  styleUrls: ['./conferencia-detail.component.css']
})
export class ConferenciaDetailComponent implements OnInit {

  @Input() conferenciaDetail!: ConferenciaDetail;
  
  constructor(
    private conferenciaService: ConferenciaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
