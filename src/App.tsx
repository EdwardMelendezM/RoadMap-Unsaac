import CanvasComponent from "./components/Canvas";
import Grafico from "./components/Grafico";
import Tree from "./components/TreeNode";

const App = () => {
  return ( 
    <div>
      {/* <Grafico /> */}
      {/* <CanvasComponent /> */}
      <Tree
        data={{
          name: 'raiz',
          children: [
            { name: 'hijo 1' },
            { name: 'hijo 2' }
          ]
        }}
      />
    </div>
   );
}
 
export default App;