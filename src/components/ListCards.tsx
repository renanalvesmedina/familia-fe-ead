import { BookBookmark } from 'phosphor-react';
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
        <h4 className="flex text-xl m-0 gap-2"><BookBookmark size={32} /> {title}</h4>
      </div>
      
      <div className="flex flex-wrap gap-4 lg:flex-nowrap">
        {cardData.map(card => (
          <Card key={card.id} route={card.route} image={card.image} />
        ))}
      </div>
    </div>
  )
}
