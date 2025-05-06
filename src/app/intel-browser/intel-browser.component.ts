import { Component, inject, signal, computed } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-intel-browser',
  imports: [ReactiveFormsModule],
  templateUrl: './intel-browser.component.html',
  styleUrl: './intel-browser.component.css'
})
export class IntelBrowserComponent {
  private sanitizer = inject(DomSanitizer);
  urlControl = new FormControl('', {nonNullable: true});
  urls = signal([
    'https://polsa.gov.pl',
    'https://spacex.com',
    'https://esa.int',
    'https://tvp.info'
  ]);
  currentUrl = toSignal(this.urlControl.valueChanges, {initialValue: this.urlControl.value});

  trustedCurrentUrl = computed(() =>
    this.sanitizer.bypassSecurityTrustResourceUrl(this.currentUrl())
  );

  addUrl() {
    const newUrl = prompt('Podaj URL');
    if (!newUrl) {
      return;
    }
    this.urls.update(urls => [newUrl, ...urls]);
    this.urlControl.setValue(newUrl);
  }

  removeCurrentUrl() {
    this.urls.update(options => {
      const newOptions = [...options];
      const index = newOptions.findIndex((url) => url === this.currentUrl());
      newOptions.splice(index, 1);
      return newOptions;
    });
    this.urlControl.setValue('');
  }
  
}