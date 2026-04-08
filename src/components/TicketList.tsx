import React, { useState } from 'react';
import { useModeration } from '../store/ModerationContext';
import { TicketCard } from './TicketCard';

export const TicketList: React.FC = () => {
    const { tickets, images } = useModeration();
    const [filter, setFilter] = useState<'all' | 'open' | 'resolved'>('all');

    // Filtrage des tickets en fonction du state `filter`
    const filteredTickets = tickets.filter(ticket => filter === 'all' || ticket.status === filter);

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2>Interface de Modération</h2>
                <div>
                    <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Filtrer par statut :</label>
                    <select value={filter} onChange={(e) => setFilter(e.target.value as any)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
                        <option value="all">Tous les tickets</option>
                        <option value="open">Ouverts</option>
                        <option value="resolved">Résolus</option>
                    </select>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {filteredTickets.length === 0 ? (
                    <p style={{ color: '#777', fontStyle: 'italic' }}>Aucun ticket trouvé pour ce filtre.</p>
                ) : (
                    filteredTickets.map(ticket => (
                        <TicketCard 
                            key={ticket.id} 
                            ticket={ticket} 
                            image={images.find(img => img.id === ticket.imageId)} 
                        />
                    ))
                )}
            </div>
        </div>
    );
};