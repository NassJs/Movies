export const Picture = ({ src, alt, size }) => {
  return (
    <>
      <img className={size} src={src} alt={alt} />
    </>
  )
}