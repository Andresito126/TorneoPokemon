import { Pokemon } from './pokemon';
export interface Team {
    id_team?: number;           
    team_name: string;      
    creation_date: Date;    
    battle_points: number;  
    description: string;   
    total_pokemon: number;  
    pokemons?: Pokemon[];
}
