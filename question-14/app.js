function myFunction(){
    const element = document.getElementById('number').value
    if(element % 2 == 0){
        document.getElementById('demo').innerHTML = 'given number is even'
    } else {
        document.getElementById('demo').innerHTML = 'given number is odd'
    }
    console.log(element)
}