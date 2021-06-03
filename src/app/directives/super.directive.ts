import { Directive, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[ambSuper]'
})
export class SuperDirective implements OnInit {

  @Input() ambSuper: {
    index: number;
    color: string;
  } = { index: 0, color: 'white' }
  el: ElementRef

  @ViewChild('productTitle') titleRef: ElementRef | undefined

  constructor(el: ElementRef) {
    this.el = el
  }
  
  ngOnInit() {
    if (this.ambSuper.index % 2 == 0) {
      this.el.nativeElement.style.backgroundColor = this.ambSuper.color
    }
  }

  @HostListener('mouseover')
  handleMouseover() {
    if (this.titleRef) {
      this.titleRef.nativeElement.style.color = 'gold'
    }
  }
 
}
