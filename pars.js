window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let textNode = [];
    // body.childNodes.forEach(node => {
    //     console.log(node);
    // });

    function rec (element){
        element.childNodes.forEach(node => {
            if (node.nodeName.match(/^L/)){
                const obj = {
                    header: node.nodeName,
                    content: node.textContent
                };
                textNode.push(obj);
                
            } else{
                rec(node);
            };
            
        });
    }

    rec(body);
    console.log(textNode)

});