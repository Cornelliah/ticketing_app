import React from 'react';
import { useModeration } from '../store/ModerationContext';
import { ImageCard } from './ImageCard';

export const ImageList: React.FC = () => {
    const { images } = useModeration();

    
    const availableImages = images.filter(image => image.status !== 'deleted');

    return (
        <div style={{ padding: '20px' }}>
            <h2>Images </h2>
            <div className="image-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
                {availableImages.map(image => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
};