import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

export type DragGenerationTarget = 'SOURCE' | 'TARGET';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  selectedItem: HTMLElement[] = [];
  currentDragItem: HTMLElement | null = null;
  currentDragTarget: DragGenerationTarget | undefined;
  sourceItem: any[] = [
    {id: 1, name: 'abc'},
    {id: 2, name: 'bbc'},
    {id: 3, name: 'bkj'},
    {id: 4, name: 'rttr'},
    {id: 5, name: 'wwuu'},
    {id: 6, name: 'erwerh'},
  ];

  targetItem: any[] = [{id: 1, name: 'abc'},];

  @ViewChild('sourceSelect') sourceSelect!: ElementRef;
  @ViewChild('targetSelect') targetSelect!: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.targetItem = [];
  }

  ngAfterViewInit() {

  }

  selectOption(e: any, i: number): void {
    console.log(e);
    console.log(i)

    console.log(e.shiftKey);

    if (!e.ctrlKey && !e.shiftKey) {
      if (this.selectedItem!.length > 0) {
        this.selectedItem?.forEach(el => {
          el.classList.remove('selected');
        })
      }
    }


    // Add the 'selected' class to the clicked item
    e.target.classList.add('selected');

    // Store a reference to the clicked item as the new selected item
    this.selectedItem.push(e.target);
  }

  onDragStart(e: any, curTarget: DragGenerationTarget): void {
    this.currentDragItem = e.target;
    this.currentDragTarget = curTarget;
  }

  onDragOver(e: any): void {
    e.preventDefault();
    e.stopPropagation();
  }

  onDrop(itemList: any, event: any, dropTarget: DragGenerationTarget): void {

    // left list 는 자기 자신에서 정렬을 할 수 없다.
    if (this.currentDragTarget === 'SOURCE' && dropTarget === 'SOURCE') {
      return;
    }

  }

  onSelectItem(e: any, i: number): void {
    console.log(e);
    console.log(i)

    if (!e.ctrlKey && !e.shiftKey) {
      if (this.selectedItem!.length > 0) {
        this.selectedItem?.forEach(el => {
          el.classList.remove('selected');
        })
      }
    }


    // Add the 'selected' class to the clicked item
    e.target.classList.add('selected');

    // Store a reference to the clicked item as the new selected item
    this.selectedItem.push(e.target);
  }
}
