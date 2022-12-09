function checkNum (){
    let bill = document.getElementById('bill');
    let total = document.getElementById('total');
    let tip = document.getElementById('tip');
    let people = document.getElementById('people');

    let isValid = /^\d*$|(?=^.*$)^\d+\.\d*$/.test(bill.value);

    if (isValid === true) {
        document.getElementById('bill-input').style.border = 'unset';

        if (tip.value === '' && people.value !== '') {
            total.value = Number(bill.value) / Number(people.value)
    
        }
        else if (people.value === '' && tip.value !== '') {
            total.value = Number(bill.value)
            tip.value = '';
        }

        else if (tip.value === '' && people.value === '') {
            total.value = Number(bill.value)
        }

        else if (tip.value !== '' && people.value !== '') {
            total.value = Number(bill.value) / Number(people.value)
            tip.value = '';
        }
    }

    if (isValid === false) {
        document.getElementById('bill-input').style.border = '2px solid red';
        total.value = 'invalid'
    }
}

function tip5(){
    let bill = document.getElementById('bill');
    let total = document.getElementById('total');
    let tip = document.getElementById('tip');
    let people = document.getElementById('people');

    if (document.getElementById('custom').contains(document.getElementById('custom-input')) === true){
        document.getElementById('custom').removeChild(document.getElementById('custom-input'));
        const btn = document.createElement('button');
        btn.id = 'custom-button';
        btn.textContent = 'Custom';
        btn.onclick = function() {custom()};
        document.getElementById('custom').appendChild(btn);
    }

    if (people.value !== '') {
        tip.value = Number(bill.value)*0.05/ Number(people.value);
        total.value = (Number(bill.value) + Number(tip.value))/ Number(people.value)
        
        if (document.getElementById('people-input').contains(document.getElementById('para')) === true){
            document.getElementById('people-input').removeChild(document.getElementById('para'));
        }
    }
    
    else if (people.value === ''){

        tip.value = Number(bill.value)*0.05
        total.value = Number(tip.value) + Number(bill.value)

        if (document.getElementById('people-input').contains(document.getElementById('para')) !== true){
            tip.value = Number(bill.value)*0.05

            const para = document.createElement ('p');
            para.id = 'para';
            para.textContent = 'Please enter valid Number';
            document.getElementById('people-input').appendChild(para);
        }
    }
}

function tip10(){
    let bill = document.getElementById('bill');
    let total = document.getElementById('total');
    let tip = document.getElementById('tip');
    let people = document.getElementById('people');

    if (document.getElementById('custom').contains(document.getElementById('custom-input')) === true){
        document.getElementById('custom').removeChild(document.getElementById('custom-input'));
        const btn = document.createElement('button');
        btn.id = 'custom-button';
        btn.textContent = 'Custom';
        btn.onclick = function() {custom()};
        document.getElementById('custom').appendChild(btn);
    }

    if (people.value !== '') {
        tip.value = Number(bill.value)*0.1/ Number(people.value);
        total.value = (Number(bill.value) + Number(tip.value))/ Number(people.value)
        
        if (document.getElementById('people-input').contains(document.getElementById('para')) === true){
            document.getElementById('people-input').removeChild(document.getElementById('para'));
        }
    }
    
    else if (people.value === ''){

        tip.value = Number(bill.value)*0.1
        total.value = Number(tip.value) + Number(bill.value)

        if (document.getElementById('people-input').contains(document.getElementById('para')) !== true){

            const para = document.createElement ('p');
            para.id = 'para';
            para.textContent = 'Please enter valid Number';
            document.getElementById('people-input').appendChild(para);
        }
    }
}

function tip15(){
    let bill = document.getElementById('bill');
    let total = document.getElementById('total');
    let tip = document.getElementById('tip');
    let people = document.getElementById('people');

    if (document.getElementById('custom').contains(document.getElementById('custom-input')) === true){
        document.getElementById('custom').removeChild(document.getElementById('custom-input'));
        const btn = document.createElement('button');
        btn.id = 'custom-button';
        btn.textContent = 'Custom';
        btn.onclick = function() {custom()};
        document.getElementById('custom').appendChild(btn);
    }
    
    if (people.value !== '') {
        tip.value = Number(bill.value)*0.15/ Number(people.value);
        total.value = (Number(bill.value) + Number(tip.value))/ Number(people.value)
        
        if (document.getElementById('people-input').contains(document.getElementById('para')) === true){
            document.getElementById('people-input').removeChild(document.getElementById('para'));
        }
    }
    
    else if (people.value === ''){

        tip.value = Number(bill.value)*0.15
        total.value = Number(tip.value) + Number(bill.value)

        if (document.getElementById('people-input').contains(document.getElementById('para')) !== true){

            const para = document.createElement ('p');
            para.id = 'para';
            para.textContent = 'Please enter valid Number';
            document.getElementById('people-input').appendChild(para);
        }
    }
}

function tip25(){
    let bill = document.getElementById('bill');
    let total = document.getElementById('total');
    let tip = document.getElementById('tip');
    let people = document.getElementById('people');

    if (document.getElementById('custom').contains(document.getElementById('custom-input')) === true){
        document.getElementById('custom').removeChild(document.getElementById('custom-input'));
        const btn = document.createElement('button');
        btn.id = 'custom-button';
        btn.textContent = 'Custom';
        btn.onclick = function() {custom()};
        document.getElementById('custom').appendChild(btn);
    }

    if (people.value !== '') {
        tip.value = Number(bill.value)*0.25/ Number(people.value);
        total.value = (Number(bill.value) + Number(tip.value))/ Number(people.value)
        
        if (document.getElementById('people-input').contains(document.getElementById('para')) === true){
            document.getElementById('people-input').removeChild(document.getElementById('para'));
        }
    }
    
    else if (people.value === ''){

        tip.value = Number(bill.value)*0.25
        total.value = Number(tip.value) + Number(bill.value)

        if (document.getElementById('people-input').contains(document.getElementById('para')) !== true){

            const para = document.createElement ('p');
            para.id = 'para';
            para.textContent = 'Please enter valid Number';
            document.getElementById('people-input').appendChild(para);
        }
    }
}

function tip50(){
    let bill = document.getElementById('bill');
    let total = document.getElementById('total');
    let tip = document.getElementById('tip');
    let people = document.getElementById('people');

    if (document.getElementById('custom').contains(document.getElementById('custom-input')) === true){
        document.getElementById('custom').removeChild(document.getElementById('custom-input'));
        const btn = document.createElement('button');
        btn.id = 'custom-button';
        btn.textContent = 'Custom';
        btn.onclick = function() {custom()};
        document.getElementById('custom').appendChild(btn);
    }

    if (people.value !== '') {
        tip.value = Number(bill.value)*0.5/ Number(people.value);
        total.value = (Number(bill.value) + Number(tip.value))/ Number(people.value)

        if (document.getElementById('people-input').contains(document.getElementById('para')) === true){
            document.getElementById('people-input').removeChild(document.getElementById('para'));
        }
    }
    
    else if (people.value === ''){

        tip.value = Number(bill.value)*0.5
        total.value = Number(tip.value) + Number(bill.value)

        if (document.getElementById('people-input').contains(document.getElementById('para')) !== true){

            const para = document.createElement ('p');
            para.id = 'para';
            para.textContent = 'Please enter valid Number';
            document.getElementById('people-input').appendChild(para);
        }
    }
}

function custom(){
    document.getElementById('custom').removeChild(document.getElementById('custom-button'));
    const customInput = document.createElement('input');
    customInput.id = 'custom-input';
    document.getElementById('custom').appendChild(customInput);
    document.getElementById('custom-input').onkeyup = function() {customTip()};
}

function customTip(){
    let bill = document.getElementById('bill');
    let total = document.getElementById('total');
    let tip = document.getElementById('tip');
    let people = document.getElementById('people');

    if (people.value !== '' && bill.value === '') {
        tip.value = Number(document.getElementById('custom-input').value)/ Number(people.value);
        total.value = Number(tip.value)/ Number(people.value)
        
        if (document.getElementById('people-input').contains(document.getElementById('para')) === true){
            document.getElementById('people-input').removeChild(document.getElementById('para'));
        }
    }
    
    else if (people.value === '' || people.value === '0' ){

        tip.value = Number(document.getElementById('custom-input').value);
        total.value = Number(tip.value) + Number(bill.value)

        if (document.getElementById('people-input').contains(document.getElementById('para')) !== true){

            const para = document.createElement ('p');
            para.id = 'para';
            para.textContent = 'Please enter valid Number';
            document.getElementById('people-input').appendChild(para);
        }
    }

    else if (people.value !== '' && bill.value !== '0') {
        tip.value = Number(document.getElementById('custom-input').value)/ Number(people.value);
        total.value = (Number(bill.value) + Number(tip.value))/ Number(people.value)
    }
}

function peopleCount(){
    let bill = document.getElementById('bill');
    let total = document.getElementById('total');
    let tip = document.getElementById('tip');
    let people = document.getElementById('people');

    let isValid = /^\d*$/.test(people.value);

    if (isValid === true && document.getElementById('people-input').contains(document.getElementById('para')) === true){

            document.getElementById('people-input').removeChild(document.getElementById('para'));

            if (tip.value === '' && bill.value !== '') {
                
                if (people.value === '' || people.value === '0'){
                    total.value = Number(bill.value);
                }
                else { 
                    total.value = Number(bill.value) / Number(people.value)
                }
            }
    
            else if (bill.value === '' && tip.value !== '') {
                if (people.value === '' || people.value === '0'){
                    total.value = Number(tip.value);
                }
                else { 
                    total.value = Number(tip.value) / Number(people.value)
                }
            }
        
            else if (tip.value !== '' && bill.value !== ''){
                if (people.value === '' || people.value === '0'){
                    total.value = (Number(bill.value) + Number(tip.value));
                }
                else { 
                    total.value = (Number(bill.value) + Number(tip.value))/ Number(people.value)
                }
            }
        }

    if (isValid === true && document.getElementById('people-input').contains(document.getElementById('para')) !== true){

        if (tip.value === '' && bill.value !== '') {
                
            if (people.value === '' || people.value === '0'){
                    total.value = Number(bill.value);
            }
            else { 
                total.value = Number(bill.value) / Number(people.value)
            }
        }
    
        else if (bill.value === '' && tip.value !== '') {
            if (people.value === '' || people.value === '0'){
                total.value = Number(tip.value);
            }
            else { 
                total.value = Number(tip.value) / Number(people.value)
            }
        }
        
        else if (tip.value !== '' && bill.value !== ''){
            if (people.value === '' || people.value === '0'){
                total.value = (Number(bill.value) + Number(tip.value));
            }
            else { 
                total.value = (Number(bill.value) + Number(tip.value))/ Number(people.value)
            }
        }
    }        
        

    if (isValid === false && document.getElementById('people-input').contains(document.getElementById('para')) !== true) {
        const para = document.createElement ('p');
        para.id = 'para';
        para.textContent = 'Please enter valid Number';
        document.getElementById('people-input').appendChild(para);
    }
}

function reseted(){

    let bill = document.getElementById('bill');
    let total = document.getElementById('total');
    let tip = document.getElementById('tip');
    let people = document.getElementById('people');

    bill.value = '';
    total.value = '';
    tip.value = '';
    people.value = '';

    if (document.getElementById('custom').contains(document.getElementById('custom-input')) === true){
        document.getElementById('custom').removeChild(document.getElementById('custom-input'));
        const btn = document.createElement('button');
        btn.id = 'custom-button';
        btn.textContent = 'Custom';
        btn.onclick = function() {custom()};
        document.getElementById('custom').appendChild(btn);
    }

    if (document.getElementById('people-input').contains(document.getElementById('para')) === true) {
        document.getElementById('people-input').removeChild(document.getElementById('para'))
    }

}