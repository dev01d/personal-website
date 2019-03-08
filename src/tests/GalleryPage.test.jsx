import React from 'react'
import { shallow } from 'enzyme'
import GalleryPage from '../views/GalleryPage'

test('should render GalleryPage correctly', () => {
  const wrapper = shallow(<GalleryPage />)
  expect(wrapper).toMatchSnapshot()
})
