function myFunction(){
    let person = prompt('Enter your age')
    if(person != null){
        if(person >= 18){
            document.getElementById('demo').innerHTML = 'you are old enough'
            //console.log('you are old enough')
        } else {
            document.getElementById('demo').innerHTML = 'stating to wait for the number of years he needs to turn 18'
           // console.log('stating to wait for the number of years he needs to turn 18')
        }
    }
}