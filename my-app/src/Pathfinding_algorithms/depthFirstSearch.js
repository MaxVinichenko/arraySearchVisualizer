import Queue from 'std-queue';

//helper functions: 
//Returns the next node for the DFS
function nextNode (node,xlen,ylen,grid){
    const x=node.x;
    const y=node.y;

    //Check what the first available depth node is, mark as visited and return 

    if (0<=node.y-1 && node.y-1<ylen){
        if (grid[x][y-1].isVisited===false){
            grid[x][y-1].isVisited=true;
            return grid[x][y-1];
        }
    }if (0<=node.x+1 && node.x+1<xlen){
        if (grid[x+1][y].isVisited===false){
            grid[x+1][y].isVisited=true;
            return grid[x+1][y];
        }
    }if (0<=node.y+1 && node.y+1<ylen){
        if (grid[x][y+1].isVisited===false){
            grid[x][y+1].isVisited=true;
            return grid[x][y+1];
        }
    }if (0<=node.x-1 && node.x-1<xlen){
        if (grid[x-1][y].isVisited===false){
            grid[x-1][y].isVisited=true;
            return grid[x-1][y]
        }
    }
    return false

}
//Will return an array of nodes for further animation 
export default function DepthFirstSearch(grid,startNodeRef,endNodeRef){
    const xlen=grid.length;
    const ylen=grid[0].length;

    let startNode=startNodeRef.current;
    let endNode=endNodeRef.current;
    let animationNodes=[];

    let stack = [];
    let node = startNode;
    stack.push(node);

    while (true){
        let next_node=nextNode(node,xlen,ylen,grid)
        if (next_node==false){
            stack.pop();
            continue
        }else{
            stack.push(next_node)
        }
        if (next_node.isEnd==true){
            break
        }
        node=next_node;
    }

    return stack
}