import React from "react";
import "./App.css";
import Content from "./component/Content";

const App = () => {
  return (
    <div>
      <Content text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ex ipsum, tincidunt vel turpis et, pretium egestas ligula. Aenean lobortis nibh sed maximus varius. Curabitur scelerisque sapien nec arcu lobortis, sit amet ullamcorper lectus mattis. In efficitur massa id vulputate vehicula. Nam dictum vitae dui quis scelerisque. Integer dignissim odio urna. Sed consequat sollicitudin odio, et eleifend nunc euismod eu. Etiam non consequat quam. Quisque quis iaculis felis, eu mollis libero. Ut dictum velit sed nisi pulvinar, sit amet tincidunt mi laoreet. Sed aliquam, dolor vitae ultricies tempor, urna nunc faucibus tellus, ac condimentum mi mauris consectetur turpis. Nam vel tempor libero. Phasellus tincidunt dolor nec mi feugiat, ut iaculis dui porttitor." name={"Lorem"} />
      <Content text="Suspendisse maximus, lacus quis hendrerit volutpat, metus metus consectetur tellus, id aliquet tellus sem sit amet nisl. Fusce dignissim dui nisi, quis ornare ante luctus id. Donec porttitor dignissim nibh, sit amet pulvinar neque euismod a. Aenean eget ante eget tellus dapibus condimentum. Quisque ullamcorper ex non sollicitudin imperdiet. Cras euismod vitae est at elementum. Vestibulum vitae nisi erat. Duis vitae venenatis nisi. Duis sit amet urna auctor leo malesuada venenatis interdum vitae augue. Nam purus ex, molestie quis bibendum vel, tristique et libero. Pellentesque nec tortor at purus molestie interdum. Phasellus varius condimentum interdum. Nunc a dictum lacus, ut lacinia nisi. Quisque nec elit eget quam ullamcorper consequat in ac neque. Cras ac mi massa." name={"Ipsum"} />
    </div>
  );
};

export default App;
