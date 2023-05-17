//returns visited nodes in order 
//export 
function binarySearch (nodes,target){
    let visitedNodes = [];
    const greyNodes = [];
    let middle = Math.ceil((nodes.length-1)/2)
    
    while (true){

        if (nodes[middle]==target){
            visitedNodes.push(middle);
            return [visitedNodes, greyNodes]
        }
        if (nodes[middle]>target){
            middle=middle/2
        }
        console.log("test")




    }


    return [visitedNodes, greyNodes]
}

binarySearch([],null);