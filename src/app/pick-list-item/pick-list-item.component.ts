import {Component, Input} from '@angular/core';
import {DropAvailable} from "./type/pick-list";

@Component({
  selector: 'app-pick-list-item',
  templateUrl: './pick-list-item.component.html',
  styleUrls: ['./pick-list-item.component.css']
})
export class PickListItemComponent {

  selectedItem: HTMLElement[] = [];

  @Input() title: string = '';
  @Input() dropAvailable: DropAvailable | undefined;
  @Input() itemList: any[] = [];



  onDragStart(e: any): void {

  }

  onSelectItem(e:any, i: number): void {

  }

}
