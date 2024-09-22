
function load(src, callback) {
    const script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    
    script.onload = () => callback(null);

    script.onerror = () => callback(new Error("wrong src"));
}

load("script1.js", (error)=>{
    if (error) {
        console.log("an error occured: "+ error);
    } else {
        console.log("hello callback")
    }
})