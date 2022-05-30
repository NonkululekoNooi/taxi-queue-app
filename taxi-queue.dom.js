// write your DOM code here.


// DOM element references
const join_queue = document.querySelector(".join_queue")
const leave_queue = document.querySelector(".leave_queue")
const join_taxi_queue = document.querySelector(".join_taxi_queue")
const depart = document.querySelector(".depart")
// create Factory Function instance

const taxiQueue = TaxiQueue();

// DOM events

join_queue.addEventListener('click', function(){

    taxiQueue.joinQueue()
    console.log(taxiQueue.joinQueue())
taxiQueue.innerHTML = taxiQueue.joinQueue()

})

leave_queue.addEventListener('click', function(){
taxiQueue.leaveQueue()
console.log(taxiQueue.leaveQueue())


})


join_taxi_queue.addEventListener('click', function(){

   taxiQueue.joinTaxiQueue()
})

depart.addEventListener('click',function(){

    alert("depart ")
})