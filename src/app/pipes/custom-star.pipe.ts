import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customStar'
})
export class CustomStarPipe implements PipeTransform {
 


  transform( title :string ) {
   let  voy=["e", "a", "i", "u", "o", "y"];
   let result : string="";
    
   for (let i = 0; i < title.length; i++) {
    let x:string=title[i]
    for (let j = 0; j < voy.length; j++) {
      if (title[i] == voy[j]) {
      x = "*";
      break;
      }
      
    }
    result = result+ x;
   
    
   }
   return result
  }

}
