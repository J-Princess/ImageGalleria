


import React from 'react';
import { useSortable } from '@dnd-kit/sortable';

const Image = ({ src, id }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({ id });

  const imageStyle = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : '',
    height: '200px', 
  };

  const containerStyle = {
    width: '18rem', 
    position: 'relative', 
  };

  const imageClassName = `image ${isDragging ? 'dragging' : ''}`;

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={`card p-1 text-start m-2 col-sm-4 border-0 ${imageClassName}`}
      style={containerStyle}
    >
      <img src={src} alt="Draggable Image" style={imageStyle} />
    </div>
  );
};

export default Image;

