import { Component, OnInit } from '@angular/core';
import { SumaService } from 'src/app/services/suma.service';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css'],
})
export class SumaComponent implements OnInit {
  num1: number;
  num2: number;
  resultado?: number;

  constructor(private sumadorService: SumaService) {
    this.num1 = 0;
    this.num2 = 0;
  }

  ngOnInit() {}
  sumar() {
    this.sumadorService.sumar(this.num1, this.num2).subscribe((res: any) => {
      this.resultado = res.resultado;
      console.log(res.resultado);
    });
  }
}
