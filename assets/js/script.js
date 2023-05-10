
/**
 * Waiting all elements are loaded and the adding
 * event listenrs to switchs and sliders
 */
document.addEventListener('DOMContentLoaded' , function(){
    let switchs = document.getElementsByTagName('input');
    for (let swt of switchs){ 
        swt.addEventListener('click', function(){
            let swType= this.getAttribute('data-type');
          switch (swType) {
                case 'whole-house-lights':
                    toggleSwitch(swType);
                break;
                case 'whole-house-desired-temp':
                    alert("hi");
                    sliderReader(swType);
                break;
                case 'whole-house-fans':
                    toggleSwitch(swType);
                break;
                case 'kitchen-light':
                    toggleSwitch(swType);
                break;
                case 'kitchen-desired-temp':
                    sliderReader(swType);
                break;
                case 'living-room-light1':
                    toggleSwitch(swType);
                break;
                case 'living-room-light2':
                    toggleSwitch(swType);
                break;
                case 'living-room-desired-temp':
                    sliderReader(swType);
                break;
                case 'living-room-fan':
                    toggleSwitch(swType);
                break;
                case 'living-room-fan-speed':
                    sliderReader(swType);
                break;

                case 'bed-room-light':
                    toggleSwitch(swType);
                break;
                
                case 'bed-room-desired-temp':
                    sliderReader(swType);
                break;

                case 'garage-light':
                    toggleSwitch(swType);
                break;

            default:
                break;
          }
          
        })
    }
    })


function toggleSwitch(dataType){
    
    }


function sliderReader(dataType){
    
}

function lightOnOff(){

}