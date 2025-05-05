import { Directive, Host, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomImage]'
})
export class ZoomImageDirective {
  zoom = 1.0;

  @HostBinding('style.transform') get scale() {
    return `scale (${this.zoom})`;
  }

  @HostListener('mousemove') zoomIn() {
    this.zoom += 0.005;
  }

  @HostListener('mouseout') zoomOut() {
    this.zoom = 1.0; 
  }

  constructor() { }

}
