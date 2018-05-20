export class Order {
    name: string;
    email: string;
    tel: string;
    address: string;
    description: string;
    attachedFile: {
      fileName: string;
      content: string;
    }
}