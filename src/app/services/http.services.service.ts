import { Injectable, Injector } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
	providedIn: 'root'
})
export class HttpServices {
 
    constructor( private http: HttpClient) {
      
    }




    getTracksById(id){
      return this.http.get(`https://api.spotify.com/v1/`+id+`tracks`, {
        headers:  {
          'Authorization': 'Bearer '+ localStorage.getItem('access_token')
        }
        }) as Observable<any[]>
    }

    getTracks(plalistId){
      return this.http.get("https://api.spotify.com/v1/playlists/"+plalistId+"/tracks", {
        headers:  {
          'Authorization': 'Bearer '+ localStorage.getItem('access_token')
        }
        }) as Observable<any[]>
    }

    getAlbumById(id){
      return this.http.get(`https://api.spotify.com/v1/playlists/`+id, {
        headers:  {
          'Authorization': 'Bearer '+ localStorage.getItem('access_token')
        }
        }) as Observable<any[]>
    }

    getProfile(){
      return this.http.get(`https://api.spotify.com/v1/me`, {
        headers:  {
          'Authorization': 'Bearer '+ localStorage.getItem('access_token')
        }
        }) as Observable<any[]>
    }

    getPlaylists(){
      return this.http.get(`https://api.spotify.com/v1/me/playlists`, {
        headers:  {
          'Authorization': 'Bearer '+ localStorage.getItem('access_token')
        }
        }) as Observable<any[]>
    }

    /*getTracks(id) : Observable<any[]>{
      return this.http.get(`https://api.spotify.com/v1/playlists?id=${id}`, {
        headers:  {
          'Authorization': 'Bearer '+ localStorage.getItem('access_token')
        }
        }) as Observable<any[]>
    }*/

}