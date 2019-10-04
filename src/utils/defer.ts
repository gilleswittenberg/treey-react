const defer = (func: () => unknown) => { 
    window.setTimeout(func, 1)
}
export default defer