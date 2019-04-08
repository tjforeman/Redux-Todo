import React from 'react'
import { connect } from "react-redux";

class Todos extends React.Component{
    state={
        todo:""
    };
}

const MapStateToProps = state=>{
    return{
        TodoOnProps:state.todo
    }
}


export default connect(MapStateToProps,{})(Todos)