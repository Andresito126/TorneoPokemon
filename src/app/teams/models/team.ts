import { Pokemon } from './pokemon';

export interface Team {
    id_team?: number;           
    trainer_id: number;  
    team_name: string;      
    creation_date: string;   
    battle_points: number;  
    description: string;   
    total_pokemon: number;  
    pokemons?: Pokemon[];
}
