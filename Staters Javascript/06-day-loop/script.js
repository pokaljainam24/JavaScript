for(i=0; i<=10; i++){
    console.log(i);
}

for(i=10; i>=0; i--){
    console.log(i);
}


for (i=1; i<=5; i++){
    str = '';
    for(j=1; j<=i; j++){
        str += ' * ';
    }
    console.log(str);
    for(j=0; j<=i; j++){
        str += ' * ';
    }
    console.log(str);
}
   
for(j=1; j<=5; j++){
    str = '';
    for(i=1; i<=j; i++){
        str += ' 1';
        str += ' 2';
    }
    console.log(str);
}

for (i=5; i>=1; i--){
    str = '';
    for(j=1; j<=i; j++){
        str += ' * ';
    }
    console.log(str);
}

for (i=1; i<=5; i--){
    str = '';
    for(j=5; j>=1; j--){
        if(j>i){
            str += '  ';
        }else{
            str += ' *';
        }
    }
    console.log(str);
}



