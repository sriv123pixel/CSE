function  sum (...num){
    const num = num.reduce((sum,i)=>(s+i));
    return sum;
}
export default sum;