import React from "react";
import renderer from "react-test-renderer";
import Footer from "../footer/footer";
import Meal from "../mealPage/Meal";
import MealPlan from "../mealPage/MealPlan";
import ThirdColumn from "../mealPage/ThirdColumn";
import Recommendation from "../mealPage/Recommendation";
import ChooseYourPlanStart from "../SignUpPage/ChooseYourPlanStart";
import SignUpStart from "../SignUpPage/SignUpStart";
import NavBar from "../navbar";
import { StaticQuery } from "gatsby";
import Index from "../../pages/index";
import Profile from "../../pages/profile";
import MealDashboard from "../../pages/mealDashboard";
import ChooseYourPlan from "../../pages/chooseyourplan";
import Login from "../../pages/login";
import SignUp from "../../pages/signup";

//Mocking before testing page queries
beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
      render({
        site: {
          siteMetadata: {
            title: `Savor`,
          },
        },
      })
  )
})

//Test 1
describe("Home page renders correctly", () =>
    it("renders correctly", () => {
      const tree = renderer.create(<Index />).toJSON()
      expect(tree).toMatchSnapshot()
    }))

//Test 2
describe("Profile page renders correctly", () =>
    it("renders correctly", () => {
      const tree = renderer.create(<Profile />).toJSON()
      expect(tree).toMatchSnapshot()
    }))

//Test 3
describe("Meal Dashboard page renders correctly", () =>
    it("renders correctly", () => {
      const tree = renderer.create(<MealDashboard />).toJSON()
      expect(tree).toMatchSnapshot()
    }))

//Test 4
describe("Choose Your Plan page renders correctly", () =>
    it("renders correctly", () => {
      const tree = renderer.create(<ChooseYourPlan />).toJSON()
      expect(tree).toMatchSnapshot()
    }))

//Test 5
describe("Login page renders correctly", () =>
    it("renders correctly", () => {
      const tree = renderer.create(<Login />).toJSON()
      expect(tree).toMatchSnapshot()
    }))

//Test 6
describe("Signup page renders correctly", () =>
    it("renders correctly", () => {
      const tree = renderer.create(<SignUp />).toJSON()
      expect(tree).toMatchSnapshot()
    }))

//Testing rendered components
//Test 7
describe("footer component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Footer />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

//Test 8
describe("meal page component", () => {
  it("renders correctly", () => {
    const tree = renderer
        .create(<Meal />)
        .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

//Test 9
describe("meal plan component", () => {
  it("renders correctly", () => {
    const tree = renderer
        .create(<MealPlan />)
        .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

//Test 10
describe("Recommendations component", () => {
  it("renders correctly", () => {
    const tree = renderer
        .create(<Recommendation />)
        .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

//Test 11
describe("third column on meal page component", () => {
  it("renders correctly", () => {
    const tree = renderer
        .create(<ThirdColumn />)
        .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

//Test 12
describe("choose your plan component", () => {
  it("renders correctly", () => {
    const tree = renderer
        .create(<ChooseYourPlanStart />)
        .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

//Test 13
describe("sign up start component", () => {
  it("renders correctly", () => {
    const tree = renderer
        .create(<SignUpStart />)
        .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

//Test 14
describe("navbar component", () => {
  it("renders correctly", () => {
    const tree = renderer
        .create(<NavBar />)
        .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
