/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // Let's start by creating a dummy head for our result linked list.
        ListNode dummyHead = new ListNode(0);
        // We'll use a pointer called 'tail' to keep track of where to append new nodes.
        ListNode tail = dummyHead;
        // And, of course, we'll need a variable called 'carry' to handle the carry-over when summing digits.
        int carry = 0;

        // Now, we'll loop through both linked lists until we exhaust them and have no carry left.
        while (l1 != null || l2 != null || carry != 0) {
            // First, let's grab the digits from l1 and l2, or 0 if they're null.
            int digit1 = (l1 != null) ? l1.val : 0;
            int digit2 = (l2 != null) ? l2.val : 0;

            // Let's do the addition with carry-over.
            int sum = digit1 + digit2 + carry;
            int digit = sum % 10;  // This gives us the digit part of the sum.
            carry = sum / 10;  // And this is the carry part.

            // Create a new node with the calculated digit and append it to our result linked list.
            ListNode newNode = new ListNode(digit);
            tail.next = newNode;
            tail = tail.next;

            // Move to the next nodes in the input linked lists if they exist.
            if (l1 != null) l1 = l1.next;
            if (l2 != null) l2 = l2.next;
        }

        // Finally, return the result linked list, excluding the dummy head.
        return dummyHead.next;
    }
}

// Time Complexity: O(max(n, m)), where n and m are the lengths of the input linked lists.
//    We iterate through both lists simultaneously, performing a constant amount of work for each node.
// Space Complexity: O(max(n, m)), where n and m are the lengths of the input linked lists.
//    The space used by the output linked list is proportional to the maximum length between the two input lists.
