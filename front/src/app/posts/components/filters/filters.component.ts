import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Output() onWordsChange = new EventEmitter<string>();
  @Output() onDateChange = new EventEmitter<Date|null>();

  @Input() mode: string = 'full';

  onInput(event: Event){
    const value = (event as any).target?.value;
    this.onWordsChange.emit( value );
  }

  onDateChanged(event: any){
    const value = (event as any).target?.value;
    this.onDateChange.emit(value ? new Date( value ) : null);
  }
}
