import { ReactComponent as BrIcon } from './assets/icons/br_icon.svg'; 
import { ReactComponent as CupIcon } from './assets/icons/cup_icon.svg'; 
import { ReactComponent as TvIcon } from './assets/icons/tv_icon.svg';
import { ReactComponent as Best1 } from './assets/Best1.svg';
import { ReactComponent as Best2 } from './assets/Best2.svg';
import { ReactComponent as Best3 } from './assets/Best3.svg';
import { ReactComponent as CardLogo1 } from './assets/cardlogo1.svg';
import { ReactComponent as CardUser1 } from './assets/carduser1.svg';
import { ReactComponent as CardLogo2 } from './assets/cardlogo2.svg';
import { ReactComponent as CardUser2 } from './assets/carduser2.svg';
import { ReactComponent as CardLogo3 } from './assets/cardlogo3.svg';
import { ReactComponent as CardUser3 } from './assets/carduser3.svg';
import { ReactComponent as CardLogo4 } from './assets/cardlogo4.svg';
import { ReactComponent as CardUser4 } from './assets/carduser4.svg';
import { ReactComponent as CardLogo5 } from './assets/cardlogo5.svg';
import { ReactComponent as CardUser5 } from './assets/carduser5.svg';


export const featuresData = [
    {
      icon: <CupIcon style={{width: 60, height:60}}/>,
      title: "Nibh viverra",
      text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
    },
    {
      icon: <BrIcon style={{width: 60, height:60}}/>,
      title: "Cursus amet",
      text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
    },
    {
      icon: <TvIcon style={{width: 60, height:60}}/>,
      title: "Ipsum fermentum",
      text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
    }
  ];
  
  export const bestOfTheBestData = [
    {
      image: <Best1 style={{ width: '100%', height:'100%'}}/>,
      title: "Title",
      text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      buttonText: "Buy Now"
    },
    {
      image: <Best2 style={{ width: '100%', height:'100%' }}/>,
      title: "Title",
      text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      buttonText: "Buy Now"
    },
    {
      image: <Best3 style={{ width: '100%', height:'100%' }}/>,
      title: "Title",
      text: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      buttonText: "Buy Now"
    }
  ];
  
  export const testimonialsData = [
    {
      avatar: CardUser1,
      companyLogo: CardLogo1,
      text: "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
      name: "Hellen Jummy",
      title: "Team Lead"
    },
    {
      avatar: CardUser2,
      companyLogo: CardLogo2,
      text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
      name: "Hellena John",
      title: "Co-founder"
    },
    {
      avatar: CardUser3,
      companyLogo: CardLogo3,
      text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
      name: "David Oshodi",
      title: "Manager"
    },
    {
      avatar: CardUser4,
      companyLogo: CardLogo4,
      text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
      name: "Charolette Hamlin",
      title: "CEO"
    },
    {
      avatar: CardUser5,
      companyLogo: CardLogo5,
      text: "Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.",
      name: "Ralph Edwards",
      title: "Product Designer"
    }
  ];
  
  export const collectionData = {
    collected: "11,658,467",
    description: "Shoes Collected",
    example: "Emma Simpson collected one pair of Cool Shoes."
  };
  