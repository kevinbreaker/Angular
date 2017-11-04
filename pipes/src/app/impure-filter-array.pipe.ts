import { Pipe, PipeTransform } from '@angular/core';

import { FilterArrayPipe } from './filter-array.pipe';

@Pipe({
  name: 'impureFilterArray',
  pure: false //Default : true
})
export class ImpureFilterArrayPipe extends FilterArrayPipe {



}
