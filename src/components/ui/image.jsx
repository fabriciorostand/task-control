export function Image(props) {
  return (
    // biome-ignore lint/performance/noImgElement: img tag necessary here
    // biome-ignore lint/a11y/useAltText: alt text dont needed here
    <img 
      decoding="async" 
      loading="lazy" 
      {...props} 
    />
  )
}