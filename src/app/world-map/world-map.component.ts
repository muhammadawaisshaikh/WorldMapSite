import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { APIService } from '../api.service';
import { SharedService } from '../services/shared/shared.service';

@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [],
  templateUrl: '/src/world.svg',
  styleUrl: './world-map.component.css'
})

export class WorldMapComponent implements OnInit, AfterViewInit {

  @ViewChildren("path") paths!: QueryList<ElementRef>;
  SelectedPath: string = "";

  constructor(
    private service: APIService,
    private sharedSrv: SharedService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paths.forEach(path => {
      path.nativeElement.addEventListener('click', () => {
        this.SelectedPath = path.nativeElement.id;
        this.service.setCountryCode(this.SelectedPath);

        console.log(this.SelectedPath);

        this.sharedSrv.setMapItemFlag(true);
      });
    });
  }

}
