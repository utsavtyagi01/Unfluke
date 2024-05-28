import React from 'react';
import { TournamentContext, Tournaments } from './components/TournamentContext';

function DropdownMenu() {
    return (
        <TournamentContext.Consumer>
            {({tournament, switchTournament}) => (
                <aside className="text-center mb-2">
                  
                </aside>
            )}
        </TournamentContext.Consumer>
    );
}

export default DropdownMenu;