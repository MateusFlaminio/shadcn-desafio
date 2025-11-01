import { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const cardVariants = cva(
  'rounded-lg px-6 py-4 transition-all duration-200 hover:shadow-md',
  {
    variants: {
      variant: {
        blue: 'bg-blue-200 text-blue-900',
        green: 'bg-green-200 text-green-900',
        pink: 'bg-pink-200 text-pink-900',
        coral: 'bg-orange-200 text-orange-900',
        purple: 'bg-purple-200 text-purple-900',
      },
    },
    defaultVariants: {
      variant: 'blue',
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  name: string
  onAdd?: () => void
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, name, onAdd, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      >
        <div className="flex items-center justify-between gap-4">
          <span className="font-medium">{name}</span>
          <button
            onClick={onAdd}
            className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded transition-colors hover:opacity-70"
            aria-label="Adicionar"
          >
            <span className="text-lg font-light">+</span>
          </button>
        </div>
      </div>
    )
  }
)

Card.displayName = 'Card'

export { Card, cardVariants }
