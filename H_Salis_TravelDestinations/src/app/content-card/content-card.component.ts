import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor() {
    this.contentList.add({
      id: 1,
      title: 'UAE',
      description: 'Dubai, in the United Arab Emirates, is a cosmopolitan city known for its futuristic skyline, luxurious lifestyle, and iconic landmarks like the Burj Khalifa. A global business and tourism hub, it has rapidly evolved from a small trading port to a symbol of modernity and opulence.',
      creator: 'Hannan Salis',
      imgURL: 'https://admin.expatica.com/ae/wp-content/uploads/sites/15/2023/11/united-arab-emirates-1536x1024.jpg',
      type: 'Countries',
      tags: ['country', 'UAE']
    });

    this.contentList.add({
      id: 2,
      title: 'New Zealand',
      description: 'New Zealand: Island nation with breathtaking landscapes, outdoor adventures, and rich Maori culture.',
      creator: 'Hannan Salis',
      imgURL: 'https://www.newzealand.com/assets/Tourism-NZ/Auckland/98618569ff/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg',
      type: 'Countries',
      tags: ['country', 'New Zealand']
    });

    this.contentList.add({
      id: 3,
      title: 'Switzerland',
      description: 'Switzerland: Landlocked European country known for its picturesque Alps, precision watchmaking, and financial stability.',
      creator: 'Hannan Salis',
      imgURL: 'https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt68eef1f3da44d0da/6512c75dec04d20f692b9ae4/Europe_Switzerland_Lauterbrunnen-village_valley_719299507-ss.jpg',
      type: 'Countries',
      tags: ['Countries', 'Switzerland']
    });
  }

  
}