export const TitleLogo = ({
  className,
  caption,
  title,
}: {
  className: string
  caption: string
  title: string
}) => {
  return (
    <h1 className={`${className} title-logo`}>
      <span>{caption}</span>
      {title}
    </h1>
  )
}

export const TitleSm = ({ title }: { title: string }) => {
  return <h1 className={`titleSm`}>{title}</h1>
}

export const Title = ({
  title,
  className,
}: {
  title: string
  className: string
}) => {
  return <h1 className={`${className} title`}>{title}</h1>
}
