function details( state={
    data: {
        author:{
            loginname:"",
            avatar_url: "",
        },
        score:0,
        create_at:"",
        recent_topics:[],
        recent_replies:[]
    },
    loading:true
} , action ) {
    switch ( action.type ){
        case 'Details_SUCC':
            return{
                data: action.data.data
            }
        default:
            return state;
    }
}

export default details;