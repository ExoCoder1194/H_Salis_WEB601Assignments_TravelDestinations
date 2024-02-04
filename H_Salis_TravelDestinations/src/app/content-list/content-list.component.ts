import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'] 
})
export class ContentListComponent implements OnInit {
  contentArray: Content[] = [
    { id: 1, title: 'United Arab Emirates', description: 'Dubai, in the United Arab Emirates, is a cosmopolitan city known for its futuristic skyline, luxurious lifestyle, and iconic landmarks like the Burj Khalifa. A global business and tourism hub, it has rapidly evolved from a small trading port to a symbol of modernity and opulence.', creator: 'Hannan Salis', imgURL: 'https://admin.expatica.com/ae/wp-content/uploads/sites/15/2023/11/united-arab-emirates-1536x1024.jpg', type: 'Country', tags: ['uae', 'country'] },
    { id: 2, title: 'New Zealand', description: 'New Zealand: Island nation with breathtaking landscapes, outdoor adventures, and rich Maori culture.', creator: 'Hannan Salis', imgURL: 'https://www.newzealand.com/assets/Tourism-NZ/Auckland/98618569ff/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg', type: 'Country', tags: ['new zealand', 'country'] },
    { id: 3, title: 'Switzerland', description: 'Switzerland: Landlocked European country known for its picturesque Alps, precision watchmaking, and financial stability.', creator: 'Hannan Salis', imgURL: 'https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt68eef1f3da44d0da/6512c75dec04d20f692b9ae4/Europe_Switzerland_Lauterbrunnen-village_valley_719299507-ss.jpg', type: 'Country', tags: ['switzerland', 'country'] },
    { id: 4, title: 'Spain', description: 'Spain is a country located in Southern Europe. It is known for its diverse culture, historic cities, and beautiful landscapes.', creator: 'Hannan Salis', imgURL: 'https://media.timeout.com/images/105890036/image.jpg', type: 'Country', tags: ['spain', 'country'] },
    { id: 5, title: 'United States', description: 'The United States is a country located primarily in North America. It consists of 50 states, a federal district, five major self-governing territories, and various possessions.', creator: 'Hannan Salis', imgURL: 'https://a.cdn-hotels.com/gdcs/production37/d1139/a8a147d0-c31d-11e8-825c-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium', type: 'Country', tags: ['usa', 'country'] },
    { id: 6, title: 'France', description: 'France is a country located in Western Europe. It is known for its rich history, art, and culture.', creator: 'Hannan Salis', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg', type: 'Country', tags: ['france', 'country'] },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleImageClick(id: number, title: string): void {
    console.log(`Clicked on image with ID: ${id}, Title: ${title}`);
  }
}
