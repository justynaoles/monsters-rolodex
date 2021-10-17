import React from 'react';
import './card-list.styles.scss';
import { Card } from '../card/card.component';

export const CardList = props => (
    <ul className="card-list">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster}/>
        ))}
    </ul>
);