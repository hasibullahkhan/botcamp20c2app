import Header from "./Components/Header";
import About from "./Components/About";
import Info from "./Components/Info";
function App() {
  return (
    <div>
      <Info no={2} name={"Hasibullah Khan"} roll={"PIAICxxxxxx"} city={"Karchi"} gender={"Male"} email={"haisbpak@gmail.com"} batch={"Batch 34"} />
      <Header objective={"Introduction to React and how to install and deployed on surge"}
        desc={"The react is JavaScript library.it is open source.many people work on it. The react is a JavaScript library.it is an open-source code. many people work on it. the main feature is the component base model. what is a component, normally we are programming in Java functional base programming we write code of the function and then call it our programs. same we do in react but we call components .it is just like a brick of the wall. if make a building with walls use bricks. when we build a website in React for this we make small components, to combine all components to make a web site same as a wall. what is the benefit of a component? we build components on time and use them in many places.it is a declarative approach. data handling is unedited fictional means one way. it is single page application. React has one HTML file.in the browse, we move to other pages. then load page it. in react it is moving very fast. if click on react it only update that page and display ."}
        desc2={"what is the difference b/w Library and framework? The framework is a big term. You have to follow complete infrastructure in any framework you have to coding in that framework. Angular is a framework.it is JavaScript and React is also JavaScript but angular has a certain thing you have to follow it. when you use the library. React is the library when you need a library you have to call it otherwise not call. But the framework is a complete system that has rules you have to follow that rule  without that it is not work or run."}
        desc3={"what are frontend and backend? the frontend is that to display on browser and backend is that data process and display on browser. any application has three-layer 1. display to user 2. business logic layer what work on click button where to store data. that is the backend layer and there is 3. database layer where to store data. so React is basically frontEnd to use it for frontEnd. model view controller (MVC) Model is database and V  is view the frontend and C is Controller React is Web Development tools and to extend react-native tools to develop for mobile app"}
        install={"How to install React Library and how to code a simple program to display hello world?"} />

      {/* <About name={"Hasibullah Khan"} roll={"PIAICxxxxxx"} city={"Karchi"} gender={"Male"} email={"haisbpak@gmail.com"} batch={"Batch 34"} /> */}

    </div>
  );
}

export default App;
