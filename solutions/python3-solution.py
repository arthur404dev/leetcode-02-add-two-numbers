class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        # Alright, we're starting off by creating a dummy head for our result linked list.
        dummyHead = ListNode(0)
        # Now, let's have a pointer called 'tail' that will help us to keep track of where to append new nodes.
        tail = dummyHead
        # We'll also need a variable 'carry' to handle the carry-over when summing digits.
        carry = 0

        # Now comes the fun part, we'll loop through both linked lists until we exhaust them and have no carry left.
        while l1 is not None or l2 is not None or carry != 0:
            # Let's grab the digits from l1 and l2, or 0 if they're None.
            digit1 = l1.val if l1 is not None else 0
            digit2 = l2.val if l2 is not None else 0

            # Time to do some math! We add the digits from both lists along with the carry-over.
            sum = digit1 + digit2 + carry
            # We split the sum into a digit and a carry.
            digit = sum % 10  # This gives us the digit part of the sum.
            carry = sum // 10  # And this is the carry part.

            # Now, let's create a new node with our calculated digit and append it to our result linked list.
            newNode = ListNode(digit)
            tail.next = newNode
            tail = tail.next

            # Move to the next nodes in the input linked lists if they exist.
            l1 = l1.next if l1 is not None else None
            l2 = l2.next if l2 is not None else None

        # Finally, we return the result linked list, excluding the dummy head.
        result = dummyHead.next
        dummyHead.next = None
        return result
