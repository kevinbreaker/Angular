import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {

  showKnowledge:boolean = false;
  
  onShowKnowledge(){
    this.showKnowledge = !this.showKnowledge;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
