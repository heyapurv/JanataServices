// import { Carousel } from "@material-tailwind/react";
// import img1 from '../../public/i1.png'
// import img2 from '../../public/i2.png'
// import img3 from '../../public/i3.png'
// import img4 from '../../public/i4.png'
// import img5 from '../../public/i5.png'
// import img6 from '../../public/i6.png'
// import img7 from '../../public/i7.png'
// import img8 from '../../public/i8.png'

// export default () => {
//   return (

//       <Carousel  className="rounded-xl shadow-2xl ">
//       <img
//         src={img1}
//         alt="image 1"
//         className="h-full w-full object-cover object-center"
//       />
//       <img
//         src={img2}
//         alt="image 1"
//         className="h-full w-full object-cover object-center"
//       />
//       <img
//         src={img3}
//         alt="image 1"
//         className="h-full w-full object-cover object-center"
//       />
//       <img
//         src={img4}
//         alt="image 1"
//         className="h-full w-full object-cover object-center"
//       />
//       <img
//         src={img5}
//         alt="image 1"
//         className="h-full w-full object-cover object-center"
//       />
//       <img
//         src={img6}
//         alt="image 1"
//         className="h-full w-full object-cover object-center"
//       />
//       <img
//         src={img7}
//         alt="image 1"
//         className="h-full w-full object-cover object-center"
//       />
//       <img
//         src={img8}
//         alt="image 1"
//         className="h-full w-full object-cover object-center"
//       />
     
//     </Carousel>

//   );
// }

import { Carousel, Typography, Button } from "@material-tailwind/react";
 
export default function Gallary() {
  return (
    <Carousel loop={true} autoplay={true}  className="rounded-xl">
     <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Fresh Grocery Options
            </Typography>
          </div>
        </div>
      </div>
     <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
            Dine with Us
            </Typography>
          </div>
        </div>
      </div>
     <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
               Essential Daily Items 
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  );
}