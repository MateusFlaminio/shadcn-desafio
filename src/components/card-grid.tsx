import { Card } from '@/components/ui/card'
import type { CardData } from '@/types'
import Popup from './popup'

// Definição dos dados da grid com as cores correspondentes à imagem
const gridData: CardData[] = [
  { id: 1, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 2, name: 'Gustavo', variant: 'blue' as const },
  { id: 3, name: 'Salomé Monteiro', variant: 'purple' as const },
  { id: 4, name: 'Salomé Monteiro', variant: 'green' as const },
  { id: 5, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 6, name: 'Salomé Monteiro', variant: 'coral' as const },
  
  { id: 7, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 8, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 9, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 10, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 11, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 12, name: 'Salomé Monteiro', variant: 'coral' as const },
  
  { id: 13, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 14, name: 'Salomé Monteiro', variant: 'coral' as const },
  { id: 15, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 16, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 17, name: 'Salomé Monteiro', variant: 'pink' as const },
  { id: 18, name: 'Salomé Monteiro', variant: 'coral' as const },
  
  { id: 19, name: 'Salomé Monteiro', variant: 'coral' as const },
  { id: 20, name: 'Salomé Monteiro', variant: 'coral' as const },
  { id: 21, name: 'Salomé Monteiro', variant: 'coral' as const },
  { id: 22, name: 'Salomé Monteiro', variant: 'green' as const },
  { id: 23, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 24, name: 'Salomé Monteiro', variant: 'green' as const },
  
  { id: 25, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 26, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 27, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 28, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 29, name: 'Salomé Monteiro', variant: 'pink' as const },
  { id: 30, name: 'Salomé Monteiro', variant: 'blue' as const },
  
  { id: 31, name: 'Salomé Monteiro', variant: 'coral' as const },
  { id: 32, name: 'Salomé Monteiro', variant: 'coral' as const },
  { id: 33, name: 'Salomé Monteiro', variant: 'pink' as const },
  { id: 34, name: 'Salomé Monteiro', variant: 'blue' as const },
  { id: 35, name: 'Salomé Monteiro', variant: 'pink' as const },
  { id: 36, name: 'Salomé Monteiro', variant: 'blue' as const },
]

export function CardGrid() {
  const handleAdd = (id: number) => {
    console.log(`Card ${id} adicionado`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {gridData.map((card) => (
          <Popup data={card}>
          <Card
            key={card.id}
            name={card.name}
            variant={card.variant}
            onAdd={() => handleAdd(card.id)}
          />
          </Popup>
        ))}
      </div>
    </div>
  )
}
