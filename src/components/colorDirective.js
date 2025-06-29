let interval;


const colorDirective = {
    mounted(el,binding) {
        el.style[binding.arg] = binding.value;
        let flag = true
        if(binding.modifiers.blink){
        interval = setInterval(()=>{
                el.style.color = flag ? '#fff' : binding.value;
                flag = !flag;
            },1000)
        }
    },
    updated(el,binding){
        el.style[binding.arg] = binding.value
    },
    unmounted(){
        if(interval){
            clearInterval(interval)
        }
    }
}

export default colorDirective;