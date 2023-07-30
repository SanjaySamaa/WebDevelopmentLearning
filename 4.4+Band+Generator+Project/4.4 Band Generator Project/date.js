const date=()=>{
    const date = new Date();
    const options ={
        year:"numeric"
    }
    return date.toLocaleDateString("en-us",options);
}

export default date;
