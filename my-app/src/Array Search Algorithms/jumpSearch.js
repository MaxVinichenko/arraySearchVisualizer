export default function jumpSearch (nodes, target){
    const jump = Math.floor(Math.sqrt(nodes.length));
    let visitedNodes = [];

    for (let i=0; i<=nodes.length-1; i+=jump){
        if (nodes[i].value==target){
            return [visitedNodes, greyNodes]
        }
    }
}