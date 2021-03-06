import React from 'react'
import Moment from 'react-moment'
import { mount, shallow } from 'enzyme'
import VerticalPostPreview from '@components/Blog/VerticalPostPreview'
import { cropContent } from '@helpers/cropContent'
import { MemoryRouter as Router } from 'react-router-dom' // 4.0.0

describe('<VerticalPostPreview />', () => {
  const samplePost = {
    data: {
      title: 'The Title',
      author: 'Mary Jane',
      category: 'Development',
      published_at: '2018-06-09T05:00:00-05:00',
      thumbnail: 'path/to/thumbnail',
      slug: 'slug',
      readtime: 5,
    },
    content: 'The content.',
  }

  it('renders without crashing', () => {
    const c = shallow(<VerticalPostPreview post={samplePost} />)
    expect(c.exists())
  })

  it('renders nothing if post prop is undefined', () => {
    const c = mount(<Router><VerticalPostPreview post={undefined} /></Router>)
    expect(c.render().text()).toEqual('')
  })

  it('renders the publish date', () => {
    const c = shallow(<VerticalPostPreview post={samplePost} />)
    const m = mount(<Moment format={'MMMM Do, YYYY'}>{samplePost.data.published_at}</Moment>)
    const publishDateC = c.children().find(Moment)
    expect(publishDateC.render().text()).toEqual(m.render().text())
  })

  it('renders the thumbnail', () => {
    const c = mount(<Router><VerticalPostPreview post={samplePost} /></Router>)
    const thumbnailC = c.childAt(0).children().find('img')
    expect(thumbnailC.prop('src')).toEqual(samplePost.data.thumbnail)
  })

  /*it('wrapps component with the link to the post', () => {
    const c = mount(<Router><VerticalPostPreview post={samplePost} /></Router>)
    const linkC = c.childAt(0).children().find('a')
    expect(linkC.prop('href')).toEqual(`/blog/post/${samplePost.data.slug}`)
  })*/

  it('renders the category', () => {
    const c = mount(<Router><VerticalPostPreview post={samplePost} /></Router>)
    expect(c.render().text()).toContain(samplePost.data.category.toUpperCase())
  })

  it('renders the post title', () => {
    const c = mount(<Router><VerticalPostPreview post={samplePost} /></Router>)
    expect(c.render().text()).toContain(samplePost.data.title)
  })

  it('renders content preview and does not crop content, if it is shorter than crop length is provided', () => {
    const c = mount(<Router><VerticalPostPreview post={samplePost} /></Router>)
    expect(c.render().text()).toContain(cropContent(samplePost.content))
  })

  const longContent =
    'The content. goes on forever and never ever stops and will it crop it or not noone knows keep on going and going and going go go og'

  it('crops content correctly with no crop length provided', () => {
    expect(cropContent(longContent)).toBe(
      'The content. goes on forever and never ever stops and will it crop it or not noone knows keep on'
    )
  })

  it('crops content correctly with by amount of crop length provided', () => {
    expect(cropContent(longContent, 2)).toBe('The content.')
  })

  it('if content undefined, retuns backup phrase', () => {
    expect(cropContent(undefined)).toBe('Coming soon')
  })
})
