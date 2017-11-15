import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyprint'
})
export class PrettyprintPipe implements PipeTransform {

  transform(value: JSON): string {
    
    if(value == null)
    return;
    
    let newString =  this.replaceAll (this.replaceAll( this.replaceAll(JSON.stringify(value),`{`,``) , `}`, ` ` ) , `"`,``).split(`,`); 
    let modified ='<br/>';
    newString.forEach(token =>{
      modified = `${modified+token} <br/> `; 
    })
    console.log(modified);
    return modified;
  }


  escapeRegExp(string):string{
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

   replaceAll(str, term, replacement):string {
    return str.replace(new RegExp(this.escapeRegExp(term), 'g'), replacement);
  }
}
