import React, { useState } from 'react';
import { type Image } from '../types';
import { useModeration } from '../store/ModerationContext';

interface ImageCardProps {
    image: Image;
}

export const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
    const { reportImage } = useModeration();
    const [isReporting, setIsReporting] = useState(false);
    const [reason, setReason] = useState('');

    const handleReport = () => {
        if (reason.trim()) {
            reportImage(image.id, reason);
            setIsReporting(false);
            setReason('');
        }
    };

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
            {image.status === 'active' && (
                <div className="image-actions">
                    {!isReporting ? (
                        <button onClick={() => setIsReporting(true)} style={{ backgroundColor: '#ff4d4f', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>
                            Signaler
                        </button>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                            <textarea 
                                value={reason} 
                                onChange={(e) => setReason(e.target.value)} 
                                placeholder="Raison du signalement..."
                                style={{ width: '100%', minHeight: '50px', padding: '5px', boxSizing: 'border-box' }}
                            />
                            <div style={{ display: 'flex', gap: '5px' }}>
                                <button onClick={handleReport} style={{ backgroundColor: '#ff4d4f', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>Envoyer</button>
                                <button onClick={() => setIsReporting(false)} style={{ backgroundColor: '#ccc', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer' }}>Annuler</button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};