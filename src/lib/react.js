function createElement(tag,attrs,...children){
    return {
        tag,
        attrs,
        children
    }
   };
    


   class Component {
       constructor (props){
           this.props=props;
           this.states={};

       }

       setState(newState){
           Object.assign(this.states,newState)
       }
   }




   const React={
       createElement
   };

   export default React;