import { Component } from '@angular/core';
import { Data } from 'src/app/interface/dataSesion';
import { DatosService } from 'src/app/services/datos.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  public data?: Data[];
  /* public data: any; */

  constructor(private datosService: DatosService) {}

  ngOnInit(): void {
    this.datosService.getData().subscribe((dato) => {
      this.data = [...dato];
      console.log(this.data);
    });
  }
}
