import nameIcon from '../../../assets/images/ico-name.png';
import emailIcon from '../../../assets/images/ico-email.png';

export class InputData {
  public type: string;
  public placeholder: string;
  public icon: string;
  public name: string;

  constructor(placeholder: string, type: string, name: string) {
    this.type = type;
    this.placeholder = placeholder;
    this.name = name;
    switch(type) {
      case 'text': this.icon = nameIcon;
        break;
      case 'email': this.icon = emailIcon;
        break;
      default: this.icon = nameIcon
    }
  }
}
