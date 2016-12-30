import assert from "assert";
import React from "react";
import {shallow} from "enzyme";
import ReactNativeSample from "../index.ios";

describe('<Intro />', function () {
  it('ReactNativeSample', function () {
    const wrapper = shallow(<ReactNativeSample />);
    assert(wrapper.find('Text').at(0).prop('children') === 'Welcome to React Native!');
    assert(wrapper.find('Text').at(1).prop('children') === 'To get started, edit index.ios.js');
  })
});