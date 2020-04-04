window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let textNode = [];
    // body.childNodes.forEach(node => {
    //     console.log(node);
    // });
    let list = [];

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
    console.log(textNode);

    function addTxt(arg){
        for(i=0; i<arg.length; i++){
            list.push(arg[i].content);
        }
    };

    addTxt(textNode);
    console.log(list);


});