
/**
 * Waiting all elements are loaded and the adding
 * event listenrs to switchs and sliders
 */
document.addEventListener('DOMContentLoaded' , function(){

    /*Initiating the whole house statuse*/
    let wholeHouse=[
        {lights: false,
        image: 'gray'} , 
        {curentTEmp: 15,
        sliderTemp: 15},
        {fan: false ,
        fanSpeed: 1}
        ];

    /*Initiating the kitchen statuse*/
    let kitchen =[
        {light: false,
        image: 'gray'} , 
        {curentTEmp: 15,
        sliderTemp: 15}
        ];
    /*Initiating the livingRoom statuse*/
    let livingRoom=[
        {light1: false,
        image: 'gray'} , 
        {light2: false,
        image: 'gray'} ,
        {curentTEmp: 15,
        sliderTemp: 15} ,
        {fan: false,
        sliderSpeed: 1}
        ];
    /*Initiating the bedRoom statuse*/
    let bedRoom=[
        {light: false,
        image: 'gray'} , 
        {curentTEmp: 15,
        sliderTemp:15}
        ];
    /*Initiating the garage statuse*/
    let garage=[
        {light: false,
        image: 'gray'} 
        ];
        console.log(garage);


    let switchs = document.getElementsByTagName('input');
    for (let swt of switchs){ 
        swt.addEventListener('click', function(){
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
                    
                    toggleSwitch(swType,this.value);
                break;
                /*in case a slider is clicked */
                case 'whole-house-desired-temp':
                case 'kitchen-desired-temp':
                case 'living-room-desired-temp':
                case 'living-room-fan-speed':
                case 'bed-room-desired-temp':
                    sliderReader(swType);
                break;

            default:
                break;
          }
          
        })
    }
    })


function toggleSwitch(dataType, val){

    
    }


function sliderReader(dataType){
    
    
}

function lightOnOff(){

}