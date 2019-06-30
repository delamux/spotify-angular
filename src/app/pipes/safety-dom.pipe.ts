import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safetyDom'
})
export class SafetyDomPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(videoCode: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + videoCode);
  }
}
