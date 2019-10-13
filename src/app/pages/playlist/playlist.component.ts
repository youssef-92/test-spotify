import { Component, OnInit, Input } from '@angular/core';
import { HttpServices } from 'src/app/services/http.services.service';
import { Playlists } from 'src/app/Resources/playlists';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist = [];
   imageUrl :string;
   followers:number;
   owner:string;
  constructor(public httpService: HttpServices ,public router:Router) { }

  ngOnInit() {
    this.httpService.getProfile().subscribe((res: any) => {
      this.imageUrl=res.images[0].url
      this.followers=res.followers.total
      this.owner=res.display_name
       
       })
     
    this.httpService.getPlaylists().subscribe((res: any) => {
     
      
      res.items.forEach(element => {
        this.playlist.push(element)
        
      })
    }





    )
  }

 }
  
