document.addEventListener('DOMContentLoaded', () => {
    // const udefinedVariable = 2;

    // try {
    //     console.log('Start of "try" block');
    //     const result = udefinedVariable + 4;
    //     console.log('Ede of "try" block');
    // } catch (error) {
    //     console.log('Error: ', error);
    //     console.log(`Error ${error.name}: ${error.massage}: /n ${error.stack}: `);
    // }



    // try {
    //     setTimeout(function () {
    //         const result = something - anotherVariable;
    //     }, 1000);
    // } catch (error) {
    //     console.log('Will not ever show');
    // }



    // const data = '{"name": "john", "age": 30'; //<== "}"

    // try {
    //     const user = JSON.parse(user);

    //     console.log(user.name);
    // } catch (error) {
    //     console.log('Что то пошло не так!' + error);
    // }



    // const data = '{"age": 30}';

    // try {
    //     const user = JSON.parse(data);

    //     if (!user.name) {
    //         throw new SyntaxError('Данные не корректны');
    //     }
    // } catch (error) {
    //     console.log('Error: 🐬🐬' + error);
    // }


    // const data = '{"name": "john", "age": 30';

    // try {
    //     let user = JSON.parse(data);

    //     if (!user.name) {
    //         throw new SyntaxError('Данные не корректны');
    //     }

    //     user = logInUser(user);
    // } catch (error) {
    //     if (error.name === 'SyntaxError') {
    //         console.log(error);
    //     } else {
    //         throw error;
    //     }
    // }



    // try {
    //     sayHello();
    // } catch (error) {
    //     if (error.name === 'SyntaxError') {
    //         console.log('Something went wrong!');
    //     }

    //     console.log(error);
    // }


    // try {
    //     console.log('TRY🐎');
    //     if (confirm('Сгенерировать оштбку'));
    //     BAD_CODE();
    // } catch (error) {
    //     console.log('CATCH🦩:' + error + '' + error.srtack);
    // } finally {
    //     console.log('FINALLY🦚');
    // }




    // window.onerror = function (massage, url, lineNum, ber) {
    //     alert(
    //         'Ката туутулду, глобалный катага тушуп калды \n MESSAGE: ' +
    //         massage +
    //         'url: ' +
    //         url +
    //         'line number: ' +
    //         lineNumber
    //     );
    // };



    // const machines = {
    //     cars: {
    //         german: ['mersedes', 'bmw', 'audi'],
    //         japon: ['kia', 'toyota', 'lexus'],
    //     },
    //     buses: {
    //         uzbekistan: ['bus 1', 'bus 2'],
    //     },
    //     sprinters: {
    //         large: ['large 1', 'large 1',],
    //     },
    //     getNameMachine: function (name) {
    //         console.log('Machine' + name);
    //     }
    // };
4

    // const lastCarOfGerman = machines.cars.german.length - 1;

    // console.log('lastCarOfGerman', '#'lastCarOfGerman + ' ' + machines.cars.german[lastCarOfGerman]);
});