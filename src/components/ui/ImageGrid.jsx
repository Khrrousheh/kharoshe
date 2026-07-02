const columnClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
}

export default function ImageGrid({
  images = [],
  columns = 3,
  gap = 'gap-4',
  variant = 'masonry',
  onImageClick,
  animated = true,
  className = '',
}) {
  const isMasonry = variant === 'masonry'
  const gridRows = isMasonry ? 'auto-rows-[220px]' : variant === 'featured' ? 'auto-rows-[220px]' : ''

  return <div className={`grid ${columnClasses[columns] ?? columnClasses[3]} ${gridRows} ${gap} ${className}`}>
    {images.map((image, index) => {
      const featured = variant === 'featured' && index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
      const masonrySpan = isMasonry ? (image.span ?? '') : ''
      const uniformHeight = variant === 'uniform' ? 'aspect-[4/3]' : 'min-h-[220px]'
      const interactive = Boolean(onImageClick)
      return <button
        type="button"
        key={`${image.src}-${index}`}
        onClick={() => onImageClick?.(image, index)}
        tabIndex={interactive ? 0 : -1}
        aria-label={interactive ? `عرض ${image.title ?? image.alt ?? 'الصورة'}` : undefined}
        className={`group relative overflow-hidden rounded-sm border border-transparent text-right transition-all duration-500 hover:border-gold-primary/40 hover:shadow-[0_20px_40px_rgba(201,168,76,.1)] ${uniformHeight} ${featured} ${masonrySpan} ${animated ? 'reveal is-visible' : ''}`}
      >
        <img src={image.src} alt={image.alt ?? image.title ?? ''} className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.08]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {image.category && <span className="text-xs text-gold-primary">{image.category}</span>}
          {image.title && <h3 className="mt-1 text-lg font-bold text-brand-white">{image.title}</h3>}
        </div>
      </button>
    })}
  </div>
}
