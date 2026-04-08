import React from 'react';
import { type Image } from '../types';

interface ImageCardProps {
    image: Image;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    return (
        <div className="image-card" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <img 
                src={image.url} 
                alt={image.description} 
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} 
            />
            <div className="image-info">
                <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>{image.description}</p>
                <span style={{ fontSize: '0.8rem', padding: '4px 8px', borderRadius: '12px', backgroundColor: '#eee', color: '#333' }}>
                    Status: {image.status}
                </span>
            </div>
        </div>
    );
};