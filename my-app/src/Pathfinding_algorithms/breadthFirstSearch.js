import Queue from 'std-queue';

//helper functions 
//Returns a list of nodes that are valid neighbors of the node passed in
function validNeighbors (node,xlen,ylen,grid){
    let validNeighbors =[];
    const x=node.x;
    const y=node.y;

    if (0<=node.x-1 && node.x-1<xlen){
        if (grid[x-1][y].isVisited==false){
            validNeighbors.push(grid[x-1][y])
        }
    }if (0<=node.x+1 && node.x+1<xlen){
        if (grid[x+1][y].isVisited==false){
            validNeighbors.push(grid[x+1][y])
        }
    }if (0<=node.y-1 && node.y-1<ylen){
        if (grid[x][y-1].isVisited==false){
            validNeighbors.push(grid[x][y-1])
        }
    }if (0<=node.y+1 && node.y+1<ylen){
        if (grid[x][y+1].isVisited==false){
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


    queue.push(startNode)
    let count=0;
    while (queue.length>0){
        console.log(queue.length)
        let currentNode=queue.shift()
        currentNode.isVisited=true;
        grid[currentNode.x][currentNode.y]=currentNode;

        animationNodes.push(currentNode)


        if(currentNode.isEnd==true){
            break
        }

        let valNeighbors=validNeighbors(currentNode,xlen,ylen,grid)

        for (let i=0; i<valNeighbors.length; i++){
            queue.push(valNeighbors[i])
        }
        count+=1;
        console.log(count);
    }

    return animationNodes
}