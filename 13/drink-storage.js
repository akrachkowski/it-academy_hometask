(function () {
    const storage = new HashStorage();

    // --------- get/set values of controls ------------

    function getDrinkName() {
        const drinkNameInput = document.getElementById("drink-name");
        if (!!drinkNameInput) {
            return drinkNameInput.value;
        }
    }

    function getDrinkAlco() {
        const drinkAlcoCheckbox = document.getElementById("drink-alco");
        if (!!drinkAlcoCheckbox) {
            return drinkAlcoCheckbox.checked;
        }
    }


    function getDrinkDescription() {
        const drinkDescriptionInput = document.getElementById("drink-description");
        if (!!drinkDescriptionInput) {
            return drinkDescriptionInput.value;
        }
    }

    function setAllDrinksResult(text) {
        const allDrinksLabel = document.getElementById("all-drinks");
        if (!!allDrinksLabel) {
            allDrinksLabel.innerText = text;
        }
    }

    // --------- button events -------------

    function addDrink() {
        const drinkName = getDrinkName();
        const drinkDescription = getDrinkDescription();
        const drinkIsAlco = getDrinkAlco();
        if (!!drinkName) {
            const drink = storage.getValue(drinkName);
            if (!!drink) {
                setAllDrinksResult(`напиток ${drinkName} уже есть в списке`);
            } else {
                storage.addValue(drinkName, {
                    description: drinkDescription,
                    isAlco: drinkIsAlco
                });
                setAllDrinksResult(`напить ${drinkName} добавлен`);
            }
        } else {
            setAllDrinksResult("Введите название напитка");
        }
    }



    function getDrink() {
        const drinkName = getDrinkName();
        if (!drinkName) {
            setAllDrinksResult("Введите название напитка");
            return;
        }
        const drink = storage.getValue(drinkName);
        if (!!drink) {
            setAllDrinksResult(`
            напиток: ${drinkName}; 
            алкогольный: ${drink.value.isAlco ? 'да' : 'нет'}; 
            рецепт: ${drink.value.description || '-'}`);
        } else {
            setAllDrinksResult(`напиток ${drinkName} не найден`);
        }
    }

    function deleteDrink() {
        const drinkName = getDrinkName();
        if (!!drinkName) {
            const isSuccess = storage.deleteValue(drinkName);
            setAllDrinksResult(isSuccess ? `напиток ${drinkName} удалён` : `напиток ${drinkName} не найден или уже был удалён`);
        } else {
            setAllDrinksResult("Введите название напитка");
        }
    }

    function getAllDrinks() {
        const drinks = storage.getKeys();
        if (!drinks.length) {
            setAllDrinksResult('список напитков пуст');
        } else {
            setAllDrinksResult(`Напитки: ${drinks.toString(',')}`)
        }
    }


    // ---------- add events  --------------

    const addBtn = document.getElementById('add-drink');
    if (!!addBtn) {
        addBtn.addEventListener('click', addDrink);
    }

    const getBtn = document.getElementById('get-drink');
    if (!!getBtn) {
        getBtn.addEventListener('click', getDrink);
    }

    const delBtn = document.getElementById('delete-drink');
    if (!!delBtn) {
        delBtn.addEventListener('click', deleteDrink);
    }

    const getAllBtn = document.getElementById('get-all-drinks');
    if (!!getAllBtn) {
        getAllBtn.addEventListener('click', getAllDrinks);
    }

})();