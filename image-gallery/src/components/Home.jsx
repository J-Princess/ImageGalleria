import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Nature from './Nature';
import Animals from './Animals';
import Foods from './Foods';

const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <Header />
  <Carousel/>
  <div className="container fluid my-3">
  

    <h2 className="text-start">Nature</h2>
    <Nature/>
  <h2 className="text-start">Animals</h2>
  <Animals/>
  <h2 className="text-start">Food</h2>
  <Foods/>
    </div>
    <Footer />
  </div>
   

    </>
  );
};

export default Home;
// import React, { useState, useEffect } from 'react';
// import {
//   DndContext,
//   closestCenter,
//   MouseSensor,
//   TouchSensor,
//   useSensor,
//   useSensors,
// } from '@dnd-kit/core';
// import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
// import Image from './Image';
// import Category from './Category';

// // Import your spinner component here
// import Spinner from './Spinner'; // Adjust the import path as needed

// const categories = ['Nature', 'Food', 'Animals'];
// const initialImages = [
//   // ... (your initialImages data here)
// ];

// const ImageCate = () => {
//   const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

//   const [gridImages, setGridImages] = useState(initialImages);
//   const [imagesLoading, setImagesLoading] = useState(true);

//   // Use useEffect to detect image loading
//   useEffect(() => {
//     const imagePromises = gridImages.map((image) => {
//       return new Promise((resolve) => {
//         const img = new Image();
//         img.src = image.src;
//         img.onload = resolve;
//         img.onerror = resolve; // Handle error case as well
//       });
//     });

//     Promise.all(imagePromises).then(() => {
//       // All images have loaded
//       setImagesLoading(false);
//     });
//   }, [gridImages]); // Run this effect whenever gridImages change

//   const handleDragEnd = ({ active, over }) => {
//     if (active && over && active.id !== over.id) {
//       setGridImages((prevImages) => {
//         const updatedImages = [...prevImages];
//         const activeIndex = updatedImages.findIndex((image) => image.id === active.id);
//         const overIndex = updatedImages.findIndex((image) => image.id === over.id);

//         if (activeIndex !== -1 && overIndex !== -1) {
//           [updatedImages[activeIndex], updatedImages[overIndex]] = [
//             updatedImages[overIndex],
//             updatedImages[activeIndex],
//           ];
//         }

//         return updatedImages;
//       });
//     }
//   };

//   return (
//     <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//       {categories.map((category, index) => (
//         <Category key={index} title={category}>
//           <SortableContext
//             items={gridImages.filter((image) => image.category === category)}
//             strategy={rectSortingStrategy}
//           >
//             {imagesLoading ? (
//               // Conditionally render the spinner
//               <div className="spinner-container">
//                 <div className="spinner-border m-5" role="status">
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//               </div>
//             ) : (
//               // Render images when imagesLoading is false
//               gridImages.map((image) => (
//                 image.category === category && (
//                   <Image key={image.id} src={image.src} id={image.id} />
//                 )
//               ))
//             )}
//           </SortableContext>
//         </Category>
//       ))}
//     </DndContext>
//   );
// };

// export default ImageCate;
