export default function linearSearch (nodes,target){
    let visitedNodes = [];
    let greyNodes =[];
        
    for (let i=0; i<=nodes.length-1;i++){
        visitedNodes.push(i);
        if (nodes[i].value == target){
            if (i<nodes.length-1){
                for (let index=i+1; index<=(nodes.length-1); index++){
                    greyNodes.push(index);
                }
            }
            return [visitedNodes,greyNodes]
        }
    }
    return [visitedNodes, greyNodes]
}