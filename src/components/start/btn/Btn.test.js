import React from "react";
import Btn from "./Btn";
import {shallow} from 'enzyme'

const component = shallow(<Btn/>);

describe("Button in start page",() => {
   it("Should find text",() => {
      expect(component.find(`[data-test='startBtnTxt']`).text()).toEqual("Start now");
   });
});