import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  @Input() contador: number;
  @Output()
  private contadorChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  multiplicar(): void {
    this.contador *= 2;
    this.contadorChange.emit(this.contador);
  }
  dividir(): void {
    this.contador /= 2;
    this.contadorChange.emit(this.contador);
  }
  reset(): void {
    this.contador = 0;
    this.contadorChange.emit(this.contador);
  }


}
