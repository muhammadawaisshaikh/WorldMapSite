import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: '/src/world.svg',
  styleUrl: './world-map.component.css'
})

export class WorldMapComponent implements OnInit, AfterViewInit {

  @ViewChildren("path") paths!: QueryList<ElementRef>;
  
  constructor(private service: APIService){

  }

  SelectedPath: string = "";

ngAfterViewInit(): void {
 
    this.paths.forEach(path => {
      path.nativeElement.addEventListener('click', () => {
        
        this.SelectedPath = path.nativeElement.id;
        
        this.service.setCountryCode(this.SelectedPath)
      });
    });
    
}

ngOnInit(): void {
  
}
}
