import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  @Input() num1: string;
  @Input() num2: string;

  resultado: number;

  constructor() {
    // Dentro del constructor NO puedo trabajar con el valor de los INPUT
    console.log(this.num1);
  }

  ngOnInit(): void {
    console.log(this.num1);
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }

}
