import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServices } from '../../services/http.services.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.scss']
})
export class TracksComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, public httpService: HttpServices, public router: Router) { }
  imageUrl: string;
  id: string;
  followers: number;
  owner: string;
  albumName: string;
  totalTracks: number;
  profileImage: string;
  tracks = []
  filtred = []
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.httpService.getAlbumById(this.id).subscribe((res: any) => {
        console.log(res)
  
        this.imageUrl = res.images[0].url
  
        this.albumName = res.name
  
        this.totalTracks = res.tracks.total

        this.tracks = res.tracks.items;
        this.filtred = res.tracks.items;
        debugger
      })
    })
    
    
    this.httpService.getProfile().subscribe((res: any) => {
      this.profileImage = res.images[0].url
      this.followers = res.followers.total
      this.owner = res.display_name
      debugger
    })




  }

  convert(duration) {
     let seconds :any = Math.floor(duration/1000)%60
    let minutes :any = Math.floor(duration/(1000*60))

    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return minutes + ":" + seconds;
}

filter(value:string){
  this.filtred = this.tracks.filter(item => item.track.name.toLowerCase().indexOf(value.toLowerCase()) >= 0)
}


}

