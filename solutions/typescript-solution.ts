/**
 * Definition for singly-linked list.
 * This class represents a node in a singly-linked list. Each node contains a value and a reference to the next node.
 */
class ListNode {
	val: number; // The value stored in this node
	next: ListNode | null; // Reference to the next node in the list, null if this is the last node

	/**
	 * Initializes a new instance of the ListNode class.
	 * @param val The value to be stored in this node.
	 * @param next Reference to the next node in the list.
	 */
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/**
 * Adds two numbers represented by linked lists.
 * @param l1 The head of the first linked list.
 * @param l2 The head of the second linked list.
 * @returns The head of the resulting linked list representing the sum of the two numbers.
 */
function addTwoNumbers(
	l1: ListNode | null,
	l2: ListNode | null,
): ListNode | null {
	// Let's begin by creating a dummy head for our result linked list.
	const dummyHead: ListNode = new ListNode();
	// We'll use a pointer called 'tail' to keep track of where to append new nodes.
	let tail: ListNode | null = dummyHead;
	// And, of course, we'll need a variable called 'carry' to handle the carry-over when summing digits.
	let carry = 0;

	// Now, we'll loop through both linked lists until we exhaust them and have no carry left.
	while (l1 !== null || l2 !== null || carry !== 0) {
		// First, let's grab the digits from l1 and l2, or 0 if they're null.
		const digit1: number = l1 ? l1.val : 0;
		const digit2: number = l2 ? l2.val : 0;

		// Let's do the addition with carry-over.
		const sum: number = digit1 + digit2 + carry;
		const digit: number = sum % 10; // This gives us the digit part of the sum.
		carry = Math.floor(sum / 10); // And this is the carry part.

		// Create a new node with the calculated digit and append it to our result linked list.
		tail.next = new ListNode(digit);
		tail = tail.next;

		// Move to the next nodes in the input linked lists if they exist.
		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}

	// Finally, return the result linked list, excluding the dummy head.
	return dummyHead.next;
}

// Time Complexity: O(max(n, m)), where n and m are the lengths of the input linked lists.
//    We iterate through both lists simultaneously, performing a constant amount of work for each node.
// Space Complexity: O(max(n, m)), where n and m are the lengths of the input linked lists.
//    The space used by the output linked list is proportional to the maximum length between the two input lists.
