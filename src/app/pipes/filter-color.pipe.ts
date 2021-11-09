import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'filterColor'
})
export class FilterColorPipe implements PipeTransform {

  transform(value: Color[], filterColorText:string): Color[] {
    filterColorText=filterColorText?filterColorText.toLocaleLowerCase():""
    return filterColorText?
    value.filter((color:Color)=>color.name.toLocaleLowerCase().indexOf(filterColorText)!==-1)
    :value;
  }

}
