module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 === 0){
        for (var i = str.length-1; i >= 0 ; i--){
            for(var j = 0; j < bracketsConfig.length; j++){
                if (str[i] == bracketsConfig[j][0]) {
                    str = str.replace(bracketsConfig[j].join(''),'');
                }
            }
        }

        if (str === ''){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }

};
