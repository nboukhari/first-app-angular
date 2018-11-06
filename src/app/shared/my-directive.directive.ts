import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostBinding('class.isActive') isActive = false;

  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    this.isActive = !this.isActive;
    if (this.el.nativeElement.contains(event.target)) {
      this.myDirective('yellow');
    } else {
      this.myDirective(null);
    }
  }

  myDirective(color) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
