import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.jpl.nasa.gov/spaceimages/images/mediumsize/PIA10364_ip.jpg';
  image3 = 'http://justfunfacts.com/wp-content/uploads/2015/11/volcanic-eruption-lightning.jpg';

  constructor() { }

  ngOnInit() {
  }

}