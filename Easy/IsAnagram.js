s = "racecar";
t = "carrace";
console.log(IsAnagram(s, t));

function IsAnagram(s, t){
    let count = 0;
    const length = t.length;
    let t2 = t;

    for(let i = 0; i < s.length; i++){
        for(let k = 0; k < t2.length; k++){
            if(s[i] == t2[k]){
                count++;
                console.log('before: ', t2);
                t2 = t2.slice(0, k) + t.slice((k + 1));
                console.log('after: ', t2);
            } else{
                if(k == t2.length){
                    console.log('falsieo');
                }
            }
        }
    }
    if(count == length){
        return true;
    } else{
        return false;
    }
}