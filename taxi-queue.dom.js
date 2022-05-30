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
  
document.querySelector(".count").innerHTML = taxiQueue.queueLength()

localStorage.setItem('joinQueue', taxiQueue.queueLength() )

})

leave_queue.addEventListener('click', function(){
taxiQueue.leaveQueue()
document.querySelector(".count").innerHTML = taxiQueue.queueLength()
localStorage.setItem('joinQueue', taxiQueue.queueLength() )


})


join_taxi_queue.addEventListener('click', function(){

   taxiQueue.joinTaxiQueue()
   document.querySelector(".taxi_queue_count").innerHTML = taxiQueue.taxiQueueLength()
   localStorage.setItem('joinTaxiQueue', taxiQueue.taxiQueueLength() )
})

depart.addEventListener('click',function(){
    taxiQueue.taxiDepart()
    document.querySelector(".count").innerHTML = taxiQueue.taxiQueueLength()
    localStorage.setItem('taxiDepart', taxiQueue.taxiQueueLength() )

})