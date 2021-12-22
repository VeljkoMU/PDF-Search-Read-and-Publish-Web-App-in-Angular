import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pdf } from 'src/app/models/pdf';
import { PdfserviceService } from 'src/app/services/pdfservice.service';

@Component({
  selector: 'app-pdf-list',
  templateUrl: './pdf-list.component.html',
  styleUrls: ['./pdf-list.component.css']
})
export class PdfListComponent implements OnInit {


  public pdfList: Pdf[]= [];
  @Output() pdfSelectionChange: EventEmitter<Pdf> = new EventEmitter();
  constructor(private pdfService: PdfserviceService) { }

  ngOnInit(): void {
    this.pdfService.getPdfs().subscribe((pdfArray)=>{
      this.pdfList = pdfArray;
    });
  }

  selectionChange(pdf:Pdf|null){
    if(pdf!=null)
      this.pdfSelectionChange.emit(pdf);
    console.log(pdf);
  }
}
