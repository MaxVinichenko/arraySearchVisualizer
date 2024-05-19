import Queue from 'std-queue';

//helper functions 
//Returns a list of nodes that are valid neighbors of the node passed in
function validNeighbors (node,xlen,ylen,grid){
    let validNeighbors =[];
    const x=node.x;
    const y=node.y;

    if (0<=node.x-1 && node.x-1<xlen){
        if (grid[x-1][y].isVisited===false){
            validNeighbors.push(grid[x-1][y])
        }
    }if (0<=node.y-1 && node.y-1<ylen){
        if (grid[x][y-1].isVisited===false){
            validNeighbors.push(grid[x][y-1])
        }
    }if (0<=node.x+1 && node.x+1<xlen){
        if (grid[x+1][y].isVisited===false){
            validNeighbors.push(grid[x+1][y])
        }
    }if (0<=node.y+1 && node.y+1<ylen){
        if (grid[x][y+1].isVisited===false){
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

    //Now we need to backtrack to find the path
    const xStart=endNode.x
    const yStart=endNode.y
    const xEnd=startNode.x
    const yEnd=startNode.y
    let pathBack=new Queue();

    //first travel in x direciton
    pathBack.push(endNode)
    let x = xStart;
    let diffX=x-xEnd;
    
    do{
        if (diffX>0){
            x-=1
            pathBack.push(grid[x][yStart])
        }else if(diffX<0){
            x+=1
            pathBack.push(grid[x][yStart])
        }else if (diffX==0){
            pathBack.push(grid[x][yStart])
        }
        diffX=x-xEnd
    }while (diffX!=0);

    // then travel in y direction 
    let y = yStart;
    let diffY=y-yEnd;
    do{
        if (diffY>0){
            y--
            pathBack.push(grid[x][y])
        }else{
            y++
            pathBack.push(grid[x][y])
        }
        diffY=y-yEnd;
    }while (diffY!=0);

    return [animationNodes, pathBack]
}