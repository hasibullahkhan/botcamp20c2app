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
        installq={"How to start coding in React?"}
        installa={"for React coding, you have to install node js and react both utilities give the environment to code in React. it is the library. the command is used to create an environment for React work use command after installation of node js and nmp stands for the node package manager. the command is used to create an environment for React is npx create-react-app <project name> after issue that command it downloads the library and builds the environment for start project in other word it creates the template and to run the project. dom it create data object model. after creation that template goes inside the library and issued a command yarn start or nmp start. it runs the project on a local proxy server. for editing of project use VsCode editor. project library contains the many folder 1. node-Modules: contain dependencies. the most important file is package.js it contained the list of package that is used in that template. there is folder name src it contains file app.js is used to display on browser hello world. the main file is index.js it contains app.js which is a child file. all these files we call components."}
        deploy={"you have to add yearn by using the command [npm install -g yarn] after that command yarn globally available. Before deploy you have to run a command build [yarn build] that commands work we have two versions of React. one development and the other is production. I work on that area which is call development. first, we have built the production. builds folder create it is mangle files. that is deployed on the server. execute surge command on that path the index file must available.use command surge ./build project: ./build domain:<give name of project>.use GitHub action procedure to deployed React project."}
        deploy1={"build GithubAction click on the Action tab and then click [on set up a workflow yourself]. first set node js environment   "} />

      {/* <About name={"Hasibullah Khan"} roll={"PIAICxxxxxx"} city={"Karchi"} gender={"Male"} email={"haisbpak@gmail.com"} batch={"Batch 34"} /> */}

    </div>
  );
}


export default App;
