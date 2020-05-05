import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import App from '../client/src/App.jsx';
import Recommended from '../client/src/Recommended.jsx';
import RecommendedList from '../client/src/RecommendedList.jsx';
import RecommendedItem from '../client/src/RecommendedItem.jsx';

describe('App Tests', () =>{
  test('should render the app component on the screen', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});