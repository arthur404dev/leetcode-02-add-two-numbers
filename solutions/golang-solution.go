package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	// Let's begin by creating a dummy head for our result linked list.
	dummyHead := &ListNode{}
	// We'll use a pointer called 'tail' to keep track of where to append new nodes.
	tail := dummyHead
	// And, of course, we'll need a variable called 'carry' to handle the carry-over when summing digits.
	carry := 0

	// Now, we'll loop through both linked lists until we exhaust them and have no carry left.
	for l1 != nil || l2 != nil || carry != 0 {
		// First, let's grab the digits from l1 and l2, or 0 if they're nil.
		digit1, digit2 := 0, 0
		if l1 != nil {
			digit1 = l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			digit2 = l2.Val
			l2 = l2.Next
		}

		// Let's do the addition with carry-over.
		sum := digit1 + digit2 + carry
		digit := sum % 10 // This gives us the digit part of the sum.
		carry = sum / 10  // And this is the carry part.

		// Create a new node with the calculated digit and append it to our result linked list.
		newNode := &ListNode{Val: digit}
		tail.Next = newNode
		tail = tail.Next
	}

	// Finally, return the result linked list, excluding the dummy head.
	return dummyHead.Next
}

// Time Complexity: O(max(n, m)), where n and m are the lengths of the input linked lists.
//    We iterate through both lists simultaneously, performing a constant amount of work for each node.
// Space Complexity: O(max(n, m)), where n and m are the lengths of the input linked lists.
//    The space used by the output linked list is proportional to the maximum length between the two input lists.
