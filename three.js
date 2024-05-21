let theJonathans = {
    children: [
      {
        name: 'Elias'
      },
      {
        name: 'Sarah',
        children: [
          {
            name: 'Max',
            children: [{
              name: 'Lily'
            }]
          },
          {
            name: 'Zoe'
          },
          {
            name: 'Theo'
          }
        ]
      },
      {
        name: 'Maria',
        children: [
          {
            name: 'Daniel'
          }
        ]
      },
      {
        name: 'David'
      }
    ]
  };
 
function printNames(tree){
    let names = []

    function printNames(node){
        //checks if the node name exists
        if(node.name) {
            names.push(node.name)
        }
        //checks if the node has a child
        if(node.children) {
            for (const child of node.children) {
                printNames(child)
            }
        }
    }
    //checkss if the root object tree has children
    if (tree.children) {
        for(const child of tree.children) {
            printNames(child)
        }
    }
    return names;
}
console.log(printNames(theJonathans))