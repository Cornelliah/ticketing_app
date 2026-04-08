import React from 'react';
import { type Ticket, type Image } from '../types';
import { useModeration } from '../store/ModerationContext';

interface TicketCardProps {
    ticket: Ticket;
    image?: Image;
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket, image }) => {
    const { resolveTicket } = useModeration();

    return (
        <div className="ticket-card" style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '15px', display: 'flex', gap: '20px', alignItems: 'flex-start', backgroundColor: '#fdfdfd' }}>
            {image && (
                <img 
                    src={image.url} 
                    alt={image.description} 
                    style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }} 
                />
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <h4 style={{ margin: 0, color: '#333' }}>Ticket #{ticket.id}</h4>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>
                    <strong>Raison du signalement :</strong> {ticket.reason}
                </p>
                <div style={{ display: 'flex', gap: '10px', fontSize: '0.85rem', color: '#666', marginTop: '10px' }}>
                    <span style={{ padding: '3px 8px', borderRadius: '12px', backgroundColor: ticket.status === 'open' ? '#e6f7ff' : '#f6ffed', border: `1px solid ${ticket.status === 'open' ? '#91d5ff' : '#b7eb8f'}`, color: ticket.status === 'open' ? '#096dd9' : '#389e0d' }}>
                        Statut : {ticket.status}
                    </span>
                    <span style={{ padding: '3px 0' }}>Date : {new Date(ticket.createdAt).toLocaleString()}</span>
                </div>
                
                {ticket.status === 'open' && (
                    <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                        <button 
                            onClick={() => resolveTicket(ticket.id, 'accept')} 
                            style={{ backgroundColor: '#ff4d4f', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                        >
                            Supprimer l'image
                        </button>
                        <button 
                            onClick={() => resolveTicket(ticket.id, 'reject')} 
                            style={{ backgroundColor: '#52c41a', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer' }}
                        >
                            Ignorer le signalement
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};