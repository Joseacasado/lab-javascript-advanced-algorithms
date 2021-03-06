const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector('#queue-container .warning-bottom');
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new QueueDataStructure();

const clearQueueInput = () => {
  queueInput.value = ''
};

const generateListQueue = () => {
  // ... your code goes here
};

generateListQueue();

const generateWarningQueue = type => {
  if (type === 'Underflow') {
    warningBottomQueue.style.display = 'block'
    warningBottomQueue.innerText = type
  } else if (type === 'Overflow') {
    warningTopQueue.style.display = 'block'
    warningTopQueue.innerText = type
  }
};

const addToQueue = () => {
  if (queue.enqueue(queueInput.value) === 'Queue Overflow') {
    generateWarningQueue('Overflow')
  } else {
    clearQueueInput()
    generateListQueue()
  }
  
};

const removeFromQueue = () => {
  if (queue.dequeue() === 'Queue Underflow') {
    generateWarningQueue('Underflow')
  } else {
    generateListQueue()
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
