// import FilterList from "../../src/components/filters";

// import Slider from "../../src/slider/slider";

// //jest.mock('../fetchCurrentUser');
// jest.mock("../../src/slider/slider");

// test("displays a user after a click", () => {
//   // Set up our document body
//   document.body.innerHTML =
//     "<div>" +
//     '  <span id="username" />' +
//     '  <button id="button" />' +
//     "</div>";

//   // This module has a side-effect
//   // require('../displayUser');
//   //const testFilterList = new FilterList;

//   // const $ = require('jquery');
//   //const fetchCurrentUser = require('../fetchCurrentUser');
//   const testApp = require("../../src/components/app");
//   const testSlider = new Slider();
//   const testDrawSlider = testSlider.drawSlider;

//   // Tell the fetchCurrentUser mock function to automatically invoke
//   // its callback with some data

//   testSlider.mockImplementation(() => console.log(1));

//   //   fetchCurrentUser.mockImplementation(cb => {
//   //     cb({
//   //       fullName: 'Johnny Cash',
//   //       loggedIn: true,
//   //     });
//   //   });

//   // Use jquery to emulate a click on our button
//   // $('#button').click();

//   // Assert that the fetchCurrentUser function was called, and that the
//   // #username span's inner text was updated as we'd expect it to.
//   // expect(fetchCurrentUser).toBeCalled();
//   testApp.start();
//   expect(testSlider).toBeCalled();
//   //expect($('#username').text()).toEqual('Johnny Cash - Logged In');
// });
