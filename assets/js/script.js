
/**
 * Waiting all elements are loaded and the adding
 * event listenrs to switchs and sliders
 */
document.addEventListener('DOMContentLoaded' , function(){

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
                } else{
                    document.getElementById('whole-house-lights-img').style.background= 'gray';
                    document.getElementById('whole-house-lights').style.background= 'red';
                    }
            break;

            /*controling the whole house fans */
            case 'whole-house-fans':
                if(ob.value ==='1'){     
                    document.getElementById('whole-house-fans-img').style.background= 'blue';
                    document.getElementById('whole-house-fans').style.background= 'green';
                } else{
                    document.getElementById('whole-house-fans-img').style.background= 'gray';
                    document.getElementById('whole-house-fans').style.background= 'red';
                    }
            break;
            case 'kitchen-light':
            if(ob.value ==='1'){     
                document.getElementById('kitchen-light-img').style.background= 'yellow';
                document.getElementById('kitchen-light').style.background= 'green';
            } else{
                document.getElementById('kitchen-light-img').style.background= 'gray';
                document.getElementById('kitchen-light').style.background= 'red';
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
            document.getElementById('whole-house-temp-value').innerHTML=  document.getElementById('whole-house-temp-slider').value;
        break;

        /*setting the whole house temp */
        case 'kitchen-desired-temp':
            document.getElementById('kitchen-temp-value').innerHTML=  document.getElementById('kitchen-temp-slider').value;
        break;

        default:
        break;
    }
    
    
}

function lightOnOff(){

}