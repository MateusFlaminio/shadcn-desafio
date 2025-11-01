/**
 * Tipos e interfaces compartilhados da aplicação
 */

export type CardVariant = 'blue' | 'green' | 'pink' | 'coral' | 'purple'

export interface CardData {
  id: number
  name: string
  variant: CardVariant
}
