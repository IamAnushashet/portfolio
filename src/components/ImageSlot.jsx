import { useEffect, useRef, useState } from 'react'

/**
 * A picture slot. Looks for `src` (normally a file in /public/images).
 * Until the image exists / has loaded, the `fallback` placeholder is shown,
 * so the layout always looks finished. Drop a real file in and it takes over.
 */
export default function ImageSlot({
  src,
  alt,
  fallback,
  className = '',
  imgClassName = '',
}) {
  const [status, setStatus] = useState('loading') // loading | loaded | failed
  const ref = useRef(null)

  useEffect(() => {
    const img = ref.current
    if (img && img.complete && img.naturalWidth > 0) setStatus('loaded')
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {status !== 'loaded' && (
        <div className="absolute inset-0">{fallback}</div>
      )}

      {status !== 'failed' && (
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('failed')}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </div>
  )
}
