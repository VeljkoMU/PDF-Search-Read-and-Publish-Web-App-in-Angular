import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pdf } from 'src/app/models/pdf';


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  @Input() Title: string = "pdfTitle";
  @Input() img: string = "null";
  @Input() author: string = "null";
  @Input() pdf: Pdf|null = null;
  @Output() selectedEvent: EventEmitter<Pdf|null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    if(this.pdf)
      this.selectedEvent.emit(this.pdf);
      console.log(this.author);
  }

}
