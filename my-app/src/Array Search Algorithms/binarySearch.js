//returns visited nodes in order 

export default function binarySearch (nodes,target){
    const visitedNodes = [];
    const greyNodes = [];
    let left = 0;
    let right = nodes.length-1;

    while (right>=left){
        let middle = Math.floor((left+right)/2);
        visitedNodes.push(middle);
        let updatedGreyNodes = [];
        let count =0;
        if (nodes[middle].value < target){
            for (let i=middle-1; i>=0; i--){
                updatedGreyNodes.push(count);
                count ++;
            }
            greyNodes.push(updatedGreyNodes);
        }
        if (nodes[middle].value > target){
            for (let i=middle+1; i<=(nodes.length-1); i++){
                updatedGreyNodes.push(i);
            }
            greyNodes.push(updatedGreyNodes);
        }

        if (nodes[middle].value==target){
            nodes[middle].isLast=true;
            nodes[middle].isFound=true;
            for (let i=0;i<=nodes.length-1;i++){
                updatedGreyNodes.push(i)
            }
            greyNodes.push(updatedGreyNodes);
            return [visitedNodes, greyNodes];
        }
        if (nodes[middle].value>target){
            right = middle -1;
        }
        if (nodes[middle].value<target){
            left = middle +1;
        }
        
    }

    return [visitedNodes, greyNodes];
}


