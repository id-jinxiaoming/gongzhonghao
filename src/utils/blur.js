export function blurView(){
    setTimeout(function() {         
        var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;                
        window.scrollTo(0, Math.max(scrollHeight - 1, 0));            
    }, 100);
}    
    