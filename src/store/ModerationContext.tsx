import React, { createContext, useContext, useState, type ReactNode } from 'react';
import {type Image, type Ticket } from '../types';
import { mockImages, mockTickets } from '../data/mockData';

interface ModerationContextType {
    images: Image[];
    setImages: React.Dispatch<React.SetStateAction<Image[]>>;
    tickets: Ticket[];
    setTickets: React.Dispatch<React.SetStateAction<Ticket[]>>;
    reportImage: (imageId: number, reason: string) => void;
}

const ModerationContext = createContext<ModerationContextType | undefined>(undefined);

export const ModerationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [images, setImages] = useState<Image[]>(mockImages);
    const [tickets, setTickets] = useState<Ticket[]>(mockTickets);

    // Fonction pour centraliser la logique de signalement
    const reportImage = (imageId: number, reason: string) => {
        const newTicket: Ticket = {
            id: Date.now(), 
            imageId,
            reason,
            status: 'open',
            createdAt: new Date().toISOString()
        };
        setTickets(prev => [...prev, newTicket]);
        setImages(prev => prev.map(img => 
            img.id === imageId ? { ...img, status: 'reported' } : img
        ));
    };

    return (
        <ModerationContext.Provider value={{ images, setImages, tickets, setTickets, reportImage }}>
            {children}
        </ModerationContext.Provider>
    );
};

export const useModeration = () => {
    const context = useContext(ModerationContext);
    if (!context) {
        throw new Error('useModeration must be used within a ModerationProvider');
    }
    return context;
};