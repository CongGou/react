function user( state={
    data:{
        avatar_url:'',
        create_at:'',
        githubUsername:'',
        loginname:'',
        recent_replies:[],
        recent_topics:[],
        score:''

    },
    loading:true
}, action ) {
    switch ( action.type ){
        case 'USER_SUCC':
            return{
                data: action.data.data
            }
        default:
            return state;
    }
}

export default user;