function setAttribute(node, attrs) {
    if (!attrs) return;
    for (let key in attrs) {
        if (key.startsWith('on')) {
            node[key.toLocaleLowerCase()] = attrs[key];
        } else if (key === 'style') {
            Object.assign(node.style, attrs[key]);
        } else {
            node[key] = attrs[key];
        }
    }
}


function render(vdom, container) {
    let node=createDomfromVdom(vdom);
    
    container.appendChild(node);
}

function createDomfromVdom(vdom){
    let node= createDomfromVdom(vdom);
    if (typeof vdom === 'string') {
        node = document.createTextNode(vdom);
        return node;
    }
    if (typeof vdom === 'object') {
        if (typeof vdom.tag === 'function') {
           let component =new vdom.tag(vdom.attrs);
           let vnode = component.render();
           node = createDomfromVdom(vnode);
        } else {
            node = document.createElement(vdom.tag);
            setAttribute(node, vdom.attrs)
            vdom.children.forEach(childVdom => render(childVdom, node));
        }
        
    }
    return node;
}


const ReactDom = {
    render(vdom, container) {
        container.innerHTML = '';
        render(vdom, container);
    }
};

export default ReactDom;