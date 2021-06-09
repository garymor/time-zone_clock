export function add(){
    if(arguments.length > 0) {
        return [...arguments].reduce((accum,elm) => accum + elm)
    }
}