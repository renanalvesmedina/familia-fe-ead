import React from 'react'
import { CardDataModel } from '../models/CardDataModel';
import { Card } from './Card'

interface ListCardsProps {
  title: string;
  cardData: CardDataModel[]
}

export function ListCards({ 
  title,
  cardData
}: ListCardsProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full items-center gap-2">
        <h4 className="text-xl m-0">{title}</h4>
      </div>
      
      <div className="flex">
        {cardData.map(card => (
          <Card key={card.id} route={card.route} image={card.image} />
        ))}
      </div>
    </div>
  )
}
