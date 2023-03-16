export const Picture = ({ src, alt }) => {
  return (
    <>
      <img className="h-40 w-40 " src={src} alt={alt} />
    </>
  )
}