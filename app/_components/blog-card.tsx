import { blogdata } from '@/assets/data/dummydata'

import { Card } from './common/card'

export const BlogCard = () => {
  return (
    <div>
      <div className="container blog-card grid-2 py">
        {blogdata.map((item) => (
          <Card data={item} key={item.id} path="blogs" />
        ))}
      </div>
    </div>
  )
}
