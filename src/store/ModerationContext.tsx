import React, { createContext, useContext, useState, type ReactNode } from 'react';
import {type Image, type Ticket } from '../types';
import { mockImages, mockTickets } from '../data/mockData';

interface ModerationContextType {
    images: Image[];
    setImages: React.Dispatch<React.SetStateAction<Image[]>>;
    tickets: Ticket[];
    setTickets: React.Dispatch<React.SetStateAction<Ticket[]>>;
}

const ModerationContext = createContext<ModerationContextType | undefined>(undefined);

export const ModerationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [images, setImages] = useState<Image[]>(mockImages);
    const [tickets, setTickets] = useState<Ticket[]>(mockTickets);

    return (
        <ModerationContext.Provider value={{ images, setImages, tickets, setTickets }}>
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