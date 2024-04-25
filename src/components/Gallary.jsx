import { Carousel } from "@material-tailwind/react";
import img1 from '../../public/i1.png'
import img2 from '../../public/i2.png'
import img3 from '../../public/i3.png'
import img4 from '../../public/i4.png'
import img5 from '../../public/i5.png'
import img6 from '../../public/i6.png'
import img7 from '../../public/i7.png'
import img8 from '../../public/i8.png'
3
export default () => {
  return (

      <Carousel loop={true} autoplay={true} className="rounded-xl shadow-2xl ">
      <img
        src={img1}
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src={img2}
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src={img3}
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src={img4}
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src={img5}
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src={img6}
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src={img7}
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
      <img
        src={img8}
        alt="image 1"
        className="h-full w-full object-cover object-center"
      />
     
    </Carousel>

  );
}