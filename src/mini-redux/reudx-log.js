export default store => next => action => {
    console.log('dispatch:', action);
    next(action);
    console.log('finish:', action);
}