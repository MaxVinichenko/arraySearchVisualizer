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
        for (let i=middle; i>=0; i--){
            updatedGreyNodes.push(count);
            count ++;
        }
        if (nodes[middle].index==target){
            return [visitedNodes, greyNodes];
        }
        if (nodes[middle].index>target){
            right = middle -1;
        }
        if (nodes[middle].index<target){
            left = middle +1;
        }
        greyNodes.push(updatedGreyNodes);
    }

    return [visitedNodes, greyNodes];
}


