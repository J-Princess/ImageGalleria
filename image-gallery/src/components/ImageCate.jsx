
import React, { useState } from 'react';
import { DndContext, closestCenter, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import Image from './Image';
import Category from './Category';
import Images from "./images/qingbao-meng-01_igFr7hd4-unsplash.jpg";
import Image1 from "./images/john-towner-CakC6u4d95g-unsplash.jpg";
import Image2 from "./images/mark-harpur-K2s_YE031CA-unsplash.jpg";
import Image3 from "./images/jonatan-pie-g6tqHx0ME1o-unsplash.jpg";
import Food from "./images/davide-cantelli-jpkfc5_d-DI-unsplash.jpg";
import Food1 from "./images/charlesdeluvio-D-vDQMTfAAU-unsplash.jpg";
import Food2 from "./images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg";
import Food3 from "./images/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg";
import Food5 from "./images/pexels-pixabay-47547.jpg";
import Food6 from "./images/eaters-collective-12eHC6FxPyg-unsplash.jpg";
import Image7 from "./images/pexels-pixabay-66898.jpg";
import Animal from "./images/pexels-devashish-gupta-15723624.jpg";
import Animal1 from "./images/francesco-ZxNKxnR32Ng-unsplash.jpg";
import Animal2 from "./images/gwen-weustink-I3C1sSXj1i8-unsplash.jpg";
import Animal3 from "./images/boris-smokrovic-lyvCvA8sKGc-unsplash.jpg";
import Food4 from "./images/chad-montano-MqT0asuoIcU-unsplash.jpg";
import Image4 from "./images/pexels-stein-egil-liland-3408744.jpg";
import Image5 from "./images/pexels-dorota-semla-8969237.jpg";
import Image6 from "./images/pexels-anthony-📷📹🙂-133459.jpg";

const categories = ['Nature', 'Food', 'Animals']; 
const initialImages = [

  { id: '1', src: Images, alt: "Image 1", category: 'Nature' },
  { id: '3', src: Image1, alt: "Image 2", category: 'Nature' },
  { id: '2', src: Animal, alt: "Image 1", category: 'Nature' },
  { id: '4', src: Image2, alt: "Image 1", category: 'Nature' },
  { id: '5', src: Food4, alt: "Image 1", category: 'Food' },
  { id: '8', src: Image5, alt: "Image 2", category: 'Nature' },
  { id: '6', src: Image6, alt: "Image 1", category: 'Nature' },
  { id: '7', src: Image7, alt: "Image 2", category: 'Animals' },
  { id: '9', src: Food, alt: "Image 1", category: 'Food' },
  { id: '10', src: Food1, alt: "Image 2", category: 'Animals' },
  { id: '11', src: Animal3, alt: "Image 1", category: 'Animals' },
  { id: '12', src: Food2, alt: "Image 1", category: 'Food' },
  { id: '15', src: Food3, alt: "Image 2", category: 'Food' },
  { id: '16', src: Image4, alt: "Image 1", category: 'Food' },
  { id: '13', src: Food5, alt: "Image 2", category: 'Food' },
  { id: '17', src: Food6, alt: "Image 1", category: 'Food' },
  { id: '14', src: Animal1, alt: "Image 2", category: 'Animals' },
  { id: '18', src: Animal2, alt: "Image 1", category: 'Animals' },
  { id: '19', src: Image3, alt: "Image 2", category: 'Animals' },





];

const ImageCate = () => {
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  );

  const [gridImages, setGridImages] = useState(initialImages);

  const handleDragEnd = ({ active, over }) => {
    if (active && over && active.id !== over.id) {
      setGridImages((prevImages) => {
        const updatedImages = [...prevImages];
        const activeIndex = updatedImages.findIndex((image) => image.id === active.id);
        const overIndex = updatedImages.findIndex((image) => image.id === over.id);
  
        if (activeIndex !== -1 && overIndex !== -1) {
          [updatedImages[activeIndex], updatedImages[overIndex]] = [updatedImages[overIndex], updatedImages[activeIndex]];
        }
  
        return updatedImages;
      });
    }
  };
  
  

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
     
    >
      {categories.map((category, index) => (
        <Category key={index} title={category} >
          <SortableContext
          
            items={gridImages.filter((image) => image.category === category)}
            strategy={rectSortingStrategy}
          >
            {gridImages.map((image) => (
              image.category === category && (
                <Image
                  key={image.id}
                  src={image.src}
                  id={image.id}
                 
                />
              )
            ))}
          </SortableContext>
        </Category>
      ))}
    </DndContext>
  );
};

export default ImageCate;
