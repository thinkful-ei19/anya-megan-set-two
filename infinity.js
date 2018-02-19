function beyond (num){
    if(num===Infinity){
        console.log('And beyond');
    }
    if(num !==Infinity && num>0){
        console.log('To infinity');
    }
    if(num !==Infinity &&num<0){
        console.log('To negative infinity')
    }
    if  (num===0){
        console.log('Staying home');
    }
}

beyond(5);
beyond(Infinity);
beyond(-1);
beyond(0);