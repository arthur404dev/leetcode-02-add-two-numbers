/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     val: i32,
 *     next: Option<Box<ListNode>>,
 * }
 */

impl Solution {
    pub fn add_two_numbers(l1: Option<Box<ListNode>>, l2: Option<Box<ListNode>>) -> Option<Box<ListNode>> {
        // Let's start by creating a dummy head for our result linked list.
        let mut dummy_head = ListNode::new(0);
        // We'll use a pointer called 'tail' to keep track of where to append new nodes.
        let mut tail = &mut dummy_head;
        // And, of course, we'll need a variable called 'carry' to handle the carry-over when summing digits.
        let mut carry = 0;
        let (mut l1, mut l2) = (l1, l2);

        // Now, we'll loop through both linked lists until we exhaust them and have no carry left.
        while l1.is_some() || l2.is_some() || carry != 0 {
            // First, let's grab the digits from l1 and l2, or 0 if they're None.
            let digit1 = l1.as_ref().map_or(0, |node| node.val);
            let digit2 = l2.as_ref().map_or(0, |node| node.val);

            // Let's do the addition with carry-over.
            let sum = digit1 + digit2 + carry;
            let digit = sum % 10;  // This gives us the digit part of the sum.
            carry = sum / 10;  // And this is the carry part.

            // Create a new node with the calculated digit and append it to our result linked list.
            tail.next = Some(Box::new(ListNode::new(digit)));
            tail = tail.next.as_mut().unwrap();

            // Move to the next nodes in the input linked lists if they exist.
            if let Some(node) = l1.as_mut() { l1 = node.next.take(); }
            if let Some(node) = l2.as_mut() { l2 = node.next.take(); }
        }

        // Finally, return the result linked list, excluding the dummy head.
        dummy_head.next
    }
}

// Time Complexity: O(max(n, m)), where n and m are the lengths of the input linked lists.
//    We iterate through both lists simultaneously, performing a constant amount of work for each node.
// Space Complexity: O(max(n, m)), where n and m are the lengths of the input linked lists.
//    The space used by the output linked list is proportional to the maximum length between the two input lists.
