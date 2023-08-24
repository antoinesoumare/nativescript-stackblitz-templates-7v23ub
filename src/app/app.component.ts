import { Component } from '@angular/core';

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  myTitle = 'This title is from the component';

  products: any[] = [
    {
      id: 1,
      title: '85 inch TV',
      price: 1999,
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2022/10/lcd-led-tv-2048px-0943-3x2-1.jpg',
      description: 'foejdpejdpkdpoekdpoekdk',
    },
    {
      id: 2,
      title: '65 inch TV',
      price: 999,
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2022/10/lcd-led-tv-2048px-0943-3x2-1.jpg',
      description: 'foejdpejdpkdpoekdpoekdk',
    },
    {
      id: 3,
      title: '25 inch TV',
      price: 99,
      image:
        'https://cdn.thewirecutter.com/wp-content/media/2022/10/lcd-led-tv-2048px-0943-3x2-1.jpg',
      description: 'foejdpejdpkdpoekdpoekdk',
    },
  ];
}
