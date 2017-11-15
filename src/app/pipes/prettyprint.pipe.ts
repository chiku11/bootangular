import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyprint'
})
export class PrettyprintPipe implements PipeTransform {

  transform(value: JSON): string {
    if(value == null)
    return;

    let tokens = JSON.stringify(value).
    replace(`{`,``)
    .replace(`}`,``).replace(`":"`,` `).split(`,`);
    let modified ='<br/>';
    tokens.forEach(token =>{
      modified = `${modified+token} <br/> `; 
    })
    console.log(modified);
    return modified;
  }

}
