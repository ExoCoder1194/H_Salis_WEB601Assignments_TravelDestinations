// content-list.ts
import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {}

  get content(): Content[] {
    return this.contentArray;
  }

  add(item: Content): void {
    this.contentArray.push(item);
  }

  get itemCount(): number {
    return this.contentArray.length;
  }

  getHtmlOutput(index: number): string {
    if (index < 0 || index >= this.contentArray.length) {
      return '<p style="color: red;">Error: Index out of range</p>';
    }

    const item = this.contentArray[index];
    return `
      <div>
        <h3>${item.title}</h3>
        <p>Description: ${item.description}</p>
        <p>Creator: ${item.creator}</p>
        ${item.imgURL ? `<img src="${item.imgURL}" alt="Image">` : ''}
        ${item.type ? `<p>Type: ${item.type}</p>` : ''}
      </div>
    `;
  }
}
