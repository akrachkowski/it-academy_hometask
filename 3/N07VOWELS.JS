function allocateVovels(){
    var phraseInput = prompt(`Введите строку`);
    var vovels = [`у`,`е`,`ы`,`а`,`о`,`э`,`я`,`и`,`ю`,`e`,`u`,`i`,`o`,`a`,`E`,`U`,`I`,`O`,`A`,`У`,`Е`,`Ы`,`А`,`О`,`Э`,`Я`,`И`,`Ю`];
    var vovelsCount = 0;
    for (var i = 0; i < phraseInput.length; i++){
                for (var j = 0; j < vovels.length; j++){
                    if (phraseInput[i] === vovels[j]) {
                        ++vovelsCount;
                        break;
                    }
                }
            }
            return vovelsCount ? vovelsCount : `Нет гласных`;
}
console.log(allocateVovels());