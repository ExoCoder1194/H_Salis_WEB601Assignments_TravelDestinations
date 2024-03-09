// contentDb.ts
import { Content } from './content-interface';
export const contentArray: Content[] = [
    { id: 1, title: 'United Arab Emirates', description: 'Dubai, in the United Arab Emirates, is a cosmopolitan city known for its futuristic skyline, luxurious lifestyle, and iconic landmarks like the Burj Khalifa. A global business and tourism hub, it has rapidly evolved from a small trading port to a symbol of modernity and opulence.', creator: 'Hannan Salis', imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg/640px-Dubai_Skylines_at_night_%28Pexels_3787839%29.jpg', type: 'Country', tags: ['uae', 'country'] },
    { id: 2, title: 'New Zealand', description: 'New Zealand: Island nation with breathtaking landscapes, outdoor adventures, and rich Maori culture.', creator: 'Hannan Salis', imgURL: 'https://www.newzealand.com/assets/Tourism-NZ/Auckland/98618569ff/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg', type: 'Country', tags: ['new zealand', 'country'] },
    { id: 3, title: 'Switzerland', description: 'Switzerland: Landlocked European country known for its picturesque Alps, precision watchmaking, and financial stability.', creator: 'Hannan Salis', imgURL: 'https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blt68eef1f3da44d0da/6512c75dec04d20f692b9ae4/Europe_Switzerland_Lauterbrunnen-village_valley_719299507-ss.jpg', type: 'Country', tags: ['switzerland', 'country'] },
    { id: 4, title: 'Spain', description: 'Spain is a country located in Southern Europe. It is known for its diverse culture, historic cities, and beautiful landscapes.', creator: 'Hannan Salis', imgURL: 'https://media.timeout.com/images/105890036/image.jpg', type: 'Country', tags: ['spain', 'country'] },
    { id: 5, title: 'United States', description: 'The United States is a country located primarily in North America. It consists of 50 states, a federal district, five major self-governing territories, and various possessions.', creator: 'Hannan Salis', imgURL: 'https://a.cdn-hotels.com/gdcs/production37/d1139/a8a147d0-c31d-11e8-825c-0242ac110006.jpg?impolicy=fcrop&w=800&h=533&q=medium', type: 'Country', tags: ['usa', 'country'] },
    {
      id: 6,
      title: 'New York',
      description: 'New York is a bustling metropolis known for its iconic skyline, diverse culture, and global significance as a financial, cultural, and entertainment hub.',
      creator: 'Hannan Salis',
      imgURL: 'https://image.cnbcfm.com/api/v1/image/106268734-1574876711571gettyimages-1059614218.jpeg?v=1576856860&w=929&h=523&vtcrop=y',
      type: 'City',
      tags: ['usa', 'city']
    },
    {
      id: 7,
      title: 'Australia',
      description: 'Australia, a vast island continent, is famous for its stunning natural landscapes, including the Great Barrier Reef, iconic landmarks like the Sydney Opera House, and a laid-back lifestyle. It is home to diverse flora and fauna, making it a haven for nature enthusiasts.',
      creator: 'Hannan Salis',
      imgURL: 'https://static.independent.co.uk/2023/12/06/14/iStock-646880230.jpg',
      type: '',
      tags: ['australia', 'country']
    }

  ];