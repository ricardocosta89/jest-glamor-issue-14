import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ProfilePicture from '../../ProfilePicture'

import { matcher, serializer } from 'jest-glamor-react'
expect.addSnapshotSerializer(serializer)
expect.extend(matcher)

describe('<ProfilePicture />', () => {
  let wrapper

  describe('with default props', () => {
    beforeEach(() => {
      wrapper = shallow(
        <ProfilePicture />
      )
    })

    test('renders the component', () => {
      expect(toJson(wrapper)).toMatchSnapshotWithGlamor(`enzyme.shallow`)
    })
  })
})
