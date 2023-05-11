
/**
 * Waiting all elements are loaded and the adding
 * event listenrs to switchs and sliders
 */
document.addEventListener('DOMContentLoaded' , function(){

// call the rndFunc function every 8 seconds
setInterval(rndFunc, 8000);
    /*Initially the fan speed slider for living room is disabled*/
    document.getElementById('living-room-fan-speed').disabled = true;

    /*Assigning listeners to inputs*/
    let switchs = document.getElementsByTagName('input');
    for (let swt of switchs){ 
        swt.addEventListener('input', function(){
            let swType= this.getAttribute('data-type');
          switch (swType) {
            /*in case a switch is clicked */
                case 'whole-house-lights':
                case 'whole-house-fans':
                case 'kitchen-light':
                case 'living-room-light1':
                case 'living-room-light2':
                case 'living-room-fan':
                case 'bed-room-light':
                case 'garage-light':
                    
                    toggleSwitch(this);
                break;
                /*in case a slider is clicked */
                case 'whole-house-desired-temp':
                case 'kitchen-desired-temp':
                case 'living-room-desired-temp':
                case 'living-room-fan-speed':
                case 'bed-room-desired-temp':
                    sliderReader(this);
                break;

            default:
                break;
          }
          
        })
    }
    })


function toggleSwitch(ob){
    switch (ob.getAttribute('data-type')) {
            
            case 'whole-house-lights':
                if(ob.value ==='1'){     
                    document.getElementById('whole-house-lights-img').style.background= 'yellow';
                    document.getElementById('whole-house-lights').style.background= 'green';
                    document.getElementById('whole-house-lights-span').innerHTML= 'ON';
                } else{
                    document.getElementById('whole-house-lights-img').style.background= 'gray';
                    document.getElementById('whole-house-lights').style.background= 'red';
                    document.getElementById('whole-house-lights-span').innerHTML= 'OFF';
                    }
            break;

            /*controling the whole house fans */
            case 'whole-house-fans':
                if(ob.value ==='1'){     
                    document.getElementById('whole-house-fans-img').style.background= 'blue';
                    document.getElementById('whole-house-fans').style.background= 'green';
                    document.getElementById('whole-house-fans-span').innerHTML= 'ON';
                    
                    /*starting fan animation related to the speed  for fan img*/
                    fanRun(ob);
                } else{
                    document.getElementById('whole-house-fans-img').style.background= 'gray';
                    document.getElementById('whole-house-fans').style.background= 'red';
                    document.getElementById('whole-house-fans-span').innerHTML= 'OFF';
                    
                    /*stopping fan animation for fan img*/
                    fanStop(ob);
                    }
            break;

            /*controling the kitchen light */
            case 'kitchen-light':
            if(ob.value ==='1'){     
                document.getElementById('kitchen-light-img').style.background= 'yellow';
                document.getElementById('kitchen-light').style.background= 'green';
                document.getElementById('kitchen-light-span').innerHTML= 'ON';
            } else{
                document.getElementById('kitchen-light-img').style.background= 'gray';
                document.getElementById('kitchen-light').style.background= 'red';
                document.getElementById('kitchen-light-span').innerHTML= 'OFF';
                }
        break;

            /*controling the living room light1 */
            case 'living-room-light1':
                if(ob.value ==='1'){     
                    document.getElementById('living-room-light1-img').style.background= 'yellow';
                    document.getElementById('living-room-light1').style.background= 'green';
                    document.getElementById('living-room-light1-span').innerHTML= 'ON';
                } else{
                    document.getElementById('living-room-light1-img').style.background= 'gray';
                    document.getElementById('living-room-light1').style.background= 'red';
                    document.getElementById('living-room-light1-span').innerHTML= 'OFF';
                    }
            break;

            /*controling the living room light2 */
            case 'living-room-light2':
                if(ob.value ==='1'){     
                    document.getElementById('living-room-light2-img').style.background= 'yellow';
                    document.getElementById('living-room-light2').style.background= 'green';
                    document.getElementById('living-room-light2-span').innerHTML= 'ON';
                } else{
                    document.getElementById('living-room-light2-img').style.background= 'gray';
                    document.getElementById('living-room-light2').style.background= 'red';
                    document.getElementById('living-room-light2-span').innerHTML= 'OFF';
                    }
            break;
            /*controling the living room fan */
            case 'living-room-fan':
                if(ob.value ==='1'){     
                    document.getElementById('living-room-fan-img').style.background= 'blue';
                    document.getElementById('living-room-fan').style.background= 'green';
                    document.getElementById('living-room-fan-speed').disabled = false;
                    document.getElementById('living-room-fan-span').innerHTML= 'ON';
                    
                    /*starting fan animation related to the speed  for fan img*/
                    fanRun(ob);
                } else{
                    document.getElementById('living-room-fan-img').style.background= 'gray';
                    document.getElementById('living-room-fan').style.background= 'red';
                    document.getElementById('living-room-fan-speed').disabled = true;
                    document.getElementById('living-room-fan-span').innerHTML= 'OFF';
                    
                     /*stopping fan animation for fan img*/
                    fanStop(ob);
                    }
            break;

            /*controling the bed room light */
            case 'bed-room-light':
                if(ob.value ==='1'){     
                    document.getElementById('bed-room-light-img').style.background= 'yellow';
                    document.getElementById('bed-room-light').style.background= 'green';
                    document.getElementById('bed-room-light-span').innerHTML= 'ON';
                } else{
                    document.getElementById('bed-room-light-img').style.background= 'gray';
                    document.getElementById('bed-room-light').style.background= 'red';
                    document.getElementById('bed-room-light-span').innerHTML= 'OFF';
                    }
            break;

            /*controling the Garage light */
            case 'garage-light':
                if(ob.value ==='1'){     
                    document.getElementById('garage-light-img').style.background= 'yellow';
                    document.getElementById('garage-light').style.background= 'green';
                    document.getElementById('garage-light-span').innerHTML= 'ON';
                } else{
                    document.getElementById('garage-light-img').style.background= 'gray';
                    document.getElementById('garage-light').style.background= 'red';
                    document.getElementById('garage-light-span').innerHTML= 'OFF';
                    }
            break;

        default:
            break;
    }
    
    }


function sliderReader(ob){
    switch (ob.getAttribute('data-type')) {

        /*setting the whole house temp */    
        case 'whole-house-desired-temp':
            document.getElementById('whole-house-temp-value').innerHTML=  document.getElementById('whole-house-temp-slider').value + '°';
        break;

        /*setting the kitchen temp */
        case 'kitchen-desired-temp':
            document.getElementById('kitchen-temp-value').innerHTML=  document.getElementById('kitchen-temp-slider').value + '°';
        break;

        /*setting the living room temp */
        case 'living-room-desired-temp':
            document.getElementById('living-room-temp-value').innerHTML=  document.getElementById('living-room-temp-slider').value + '°';
        break;

        /*setting the living room fan speed */
        case 'living-room-fan-speed':
            document.getElementById('living-room-fan-speed-value').innerHTML=  document.getElementById('living-room-fan-speed').value;
            
            /*updating fan speed for fan img animation */
            fanRun(ob);
        break;

        /*setting the bed room temp */
        case 'bed-room-desired-temp':
            document.getElementById('bed-room-temp-value').innerHTML=  document.getElementById('bed-room-temp-slider').value + '°';
        break;

        default:
        break;
    }
    
    
}

function fanRun(ob1){
    
    /* if either living room fan switch triggered to ON or speed slider triggered it will run the living room fan img regarding to the fan speed slider value */

    if(ob1.getAttribute('data-type')==='living-room-fan' || ob1.getAttribute('data-type')==='living-room-fan-speed'){
        if(document.getElementById('living-room-fan-speed').value ==='3'){
            document.getElementById('living-room-fan-img' ).classList.remove('run2');
            document.getElementById('living-room-fan-img' ).classList.remove('run1');
            document.getElementById('living-room-fan-img' ).classList.add('run3');
        } else if(document.getElementById('living-room-fan-speed').value ==='2'){
            document.getElementById('living-room-fan-img' ).classList.remove('run3');
            document.getElementById('living-room-fan-img' ).classList.remove('run1');
            document.getElementById('living-room-fan-img').classList.add('run2');
        } else {
            document.getElementById('living-room-fan-img' ).classList.remove('run2');
            document.getElementById('living-room-fan-img' ).classList.remove('run3');
            document.getElementById('living-room-fan-img').classList.add('run1');
        } 
    }

    /*else if whole house fan switch triggered ON it will run the whole house fan img regarding to the fan speed slider value */
    else if (ob1.getAttribute('data-type')==='whole-house-fans'){
        if(document.getElementById('living-room-fan-speed').value ==='3'){
            document.getElementById('whole-house-fans-img' ).classList.remove('run2');
            document.getElementById('whole-house-fans-img' ).classList.remove('run1');
            document.getElementById('whole-house-fans-img' ).classList.add('run3');
        } else if(document.getElementById('living-room-fan-speed').value ==='2'){
            document.getElementById('whole-house-fans-img' ).classList.remove('run3');
            document.getElementById('whole-house-fans-img' ).classList.remove('run1');
            document.getElementById('whole-house-fans-img').classList.add('run2');
        } else {
            document.getElementById('whole-house-fans-img' ).classList.remove('run2');
            document.getElementById('whole-house-fans-img' ).classList.remove('run3');
            document.getElementById('whole-house-fans-img').classList.add('run1');
        }
    }

    
}
function fanStop(ob1){
    if(ob1.getAttribute('data-type')==='living-room-fan'){   
        if(document.getElementById('living-room-fan-img').classList.contains('run3')){
            document.getElementById('living-room-fan-img' ).classList.remove('run3');

        } else if(document.getElementById('living-room-fan-img').classList.contains('run2')){
            document.getElementById('living-room-fan-img' ).classList.remove('run2');

        } else if(document.getElementById('living-room-fan-img').classList.contains('run1')) {
            document.getElementById('living-room-fan-img').classList.remove('run1');
        }
    } else if (ob1.getAttribute('data-type')==='whole-house-fans'){
        if(document.getElementById('whole-house-fans-img').classList.contains('run3')){
            document.getElementById('whole-house-fans-img' ).classList.remove('run3');

        } else if(document.getElementById('whole-house-fans-img').classList.contains('run2')){
            document.getElementById('whole-house-fans-img' ).classList.remove('run2');

        } else if(document.getElementById('whole-house-fans-img').classList.contains('run1')) {
            document.getElementById('whole-house-fans-img').classList.remove('run1');
        }

    }
}


function rndFunc(){
  let currentTempElements = document.getElementsByClassName('current-temp-span');
  for (currnetTemp of currentTempElements ){
    // generate a random number between 13 and 22
    currnetTemp.innerHTML=  Math.floor(Math.random() * 10) + 13 + '°';
  }
  
}