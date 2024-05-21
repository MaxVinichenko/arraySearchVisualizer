import Queue from 'std-queue';

//helper functions 
//Returns a list of nodes that are valid neighbors of the node passed in
function validNeighbors (node,xlen,ylen,grid){
    let validNeighbors =[];
    const x=node.x;
    const y=node.y;

    if (0<=node.x-1 && node.x-1<xlen){
        if (grid[x-1][y].isVisited===false){
            grid[x-1][y].prevNode=node;
            validNeighbors.push(grid[x-1][y])
        }
    }if (0<=node.y-1 && node.y-1<ylen){
        if (grid[x][y-1].isVisited===false){
            grid[x][y-1].prevNode=node;
            validNeighbors.push(grid[x][y-1])
        }
    }if (0<=node.x+1 && node.x+1<xlen){
        if (grid[x+1][y].isVisited===false){
            grid[x+1][y].prevNode=node;
            validNeighbors.push(grid[x+1][y])
        }
    }if (0<=node.y+1 && node.y+1<ylen){
        if (grid[x][y+1].isVisited===false){
            grid[x][y+1].prevNode=node;
            validNeighbors.push(grid[x][y+1])
        }
    }
    return validNeighbors 
}


export default function BreadthFirstSearch(grid, startNodeRef, endNodeRef){
    const queue = new Queue();
    let animationNodes=new Queue();

    const xlen=grid.length;
    const ylen=grid[0].length;

    const startNode=startNodeRef.current;
    const endNode=endNodeRef.current;

    startNode.isVisited=true;
    grid[startNode.x][startNode.y]=startNode;
    queue.push(startNode)
    let count=0;

    while (queue.length>0){
        let currentNode=queue.shift()
        let valNeighbors=validNeighbors(currentNode,xlen,ylen,grid)

        currentNode.valNeighbors=valNeighbors;

        animationNodes.push(currentNode)

        if(currentNode.isEnd==true){
            break
        }

        for (let i=0; i<valNeighbors.length; i++){
            valNeighbors[i].isVisited=true;
            grid[valNeighbors[i].x][valNeighbors[i].y]=valNeighbors[i];
            queue.push(valNeighbors[i])
        }
    }


    //return the pathBack
    let pathBack = new Queue();
    let node=endNode;
    pathBack.push(node);

    while(true){ 
        let prevNode=node.prevNode;
        pathBack.push(prevNode)

        if (prevNode.isStart==true){
            break
        }
        node=prevNode;

    }


    return [animationNodes, pathBack]
}