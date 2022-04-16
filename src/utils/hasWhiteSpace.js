const hasWhiteSpace = (string) => {
    if(string === ''){
        return true;
    }
    return string.indexOf(' ') >= 0;
}

export default hasWhiteSpace;