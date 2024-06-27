import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'

import { TitleSm } from './title'

type CardProps = {
  data: string
  caption: string
  show: string
  path: string
}

export const Card = ({ data, caption, show, path }: CardProps) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={data.cover} alt={data.title} />
        </div>

        <div className="card-details">
          <Link href={`${path}/${data.id}`} className="title-link">
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <Link href={`${path}/${data.id}`} className="title-link">
              {caption} <HiOutlineArrowRight className="link-icon" />
            </Link>
          )}
          <div className="flex">
            <span>{data.category}</span>{' '}
            {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  )
}
