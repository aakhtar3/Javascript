// https://en.wikipedia.org/wiki/Cycle_detection

/**
 * Counts the length of the cycle
 * @param {LinkedList} slow
 * @returns {Number}
 */
const calculateCycleLength = (slow) => {
  let current = slow
  let cycleLength = 0

  while (true) {
    current = current.next
    cycleLength++

    if (current === slow) break
  }

  return cycleLength
}

/**
 * Determines the length of the cycle in the LinkedList
 * @param {LinkedList} head
 * @returns {Number}
 */
function cycleLength (head) {
  let slow = head
  let fast = head
  let length = 0

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      length = calculateCycleLength(slow)
      break
    }
  }

  return length
}

const LinkedList = require('../Data-Structures/Linked-List/SinglyLinkList')
const linkedList = new LinkedList()
  .add(1)
  .add(2)
  .add(3)
  .add(4)
  .add(5)
  .add(6)
const { head } = linkedList

linkedList.addNodeToTail(head.next.next)
console.log('Cycle length', cycleLength(head)) // 4

linkedList.addNodeToTail(head.next.next.next)
console.log('Cycle length', cycleLength(head)) // 3
